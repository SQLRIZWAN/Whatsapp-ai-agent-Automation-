import { getFirestore } from '../firestore'
import { COLLECTIONS } from '@shared/constants/config'
import { User } from '@shared/types/common.types'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'

const requireDb = () => {
  const db = getFirestore()
  if (!db) {
    throw new AppError(
      ErrorCode.INTERNAL_ERROR,
      'Database is not configured. Set Firebase credentials and restart.',
      503
    )
  }
  return db
}

export class UserRepository {
  async createUser(uid: string, userData: Partial<User>): Promise<User> {
    const db = requireDb()
    const user: User = {
      uid,
      email: userData.email!,
      displayName: userData.displayName || '',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active',
      preferences: userData.preferences || {
        timezone: 'UTC',
        notifications: true,
        theme: 'light'
      }
    }

    await db.collection(COLLECTIONS.USERS).doc(uid).set(user)
    return user
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const db = requireDb()
    const snapshot = await db
      .collection(COLLECTIONS.USERS)
      .where('email', '==', email)
      .limit(1)
      .get()

    if (snapshot.empty) {
      return null
    }

    return snapshot.docs[0].data() as User
  }

  async getUserByUid(uid: string): Promise<User | null> {
    const db = requireDb()
    const doc = await db.collection(COLLECTIONS.USERS).doc(uid).get()

    if (!doc.exists) {
      return null
    }

    return doc.data() as User
  }

  async updateUser(uid: string, updates: Partial<User>): Promise<User> {
    const db = requireDb()
    const updateData = {
      ...updates,
      updatedAt: new Date()
    }

    await db.collection(COLLECTIONS.USERS).doc(uid).update(updateData)
    return this.getUserByUid(uid) as Promise<User>
  }

  async deleteUser(uid: string): Promise<void> {
    const db = requireDb()
    await db.collection(COLLECTIONS.USERS).doc(uid).delete()
  }

  async userExists(email: string): Promise<boolean> {
    const user = await this.getUserByEmail(email)
    return user !== null
  }
}

export default new UserRepository()
