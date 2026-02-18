/**
 * POST /api/auth/seed
 * Creates the initial admin user (run once during setup)
 * Remove or secure this route after initial setup!
 */
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/models/User';

export async function POST() {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      return NextResponse.json(
        { message: 'Admin already exists', email: existingAdmin.email },
        { status: 200 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@shreeshaengineering.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@1234';

    const admin = await User.create({
      email: adminEmail,
      password: adminPassword,
      name: 'Admin',
      role: 'admin',
    });

    return NextResponse.json({
      message: 'Admin created successfully',
      email: admin.email,
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
  }
}
