import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      lowercase: true
    },
    password: {
      type: String,
      min: 6
    },
    img: { type: String, required: false },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      lowercase: true
    },
    phone: {
      type: String
    },
    message: {
      type: String,
      min: 10,
      max: 160,
      required: true
    }
  },
  { timestamps: true }
)

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true
    },
    img: { type: String, required: true },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
  },
  { timestamps: true }
)

const authTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    unique: true
  },
  token: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: process.env.EMAIL_VERIFICATION_TOKEN_EXPIRES
  }
})

const resetPasswordTokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    ref: 'User',
    unique: true
  },
  token: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: process.env.RESET_PASSWORD_TOKEN_EXPIRES
  }
})

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema)
export const Contact =
  mongoose.models?.Contact || mongoose.model('Contact', contactSchema)
export const VerificationToken =
  mongoose.models?.VerificationToken ||
  mongoose.model('VerificationToken', authTokenSchema)
export const ResetPasswordToken =
  mongoose.models?.ResetPasswordToken ||
  mongoose.model('ResetPasswordToken', resetPasswordTokenSchema)
