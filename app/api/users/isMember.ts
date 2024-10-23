// pages/api/user.js
import { connect } from '@/lib/database/db'; // Your MongoDB connection utility
import User from '@/lib/database/models/user.model'; // Your user model

export default async function handler(req:any, res:any) {
  await connect();

  // Assuming you have some authentication middleware
  const { userId } = req; // Get user ID from your auth middleware or session

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ isMember: user.isMember });
}
