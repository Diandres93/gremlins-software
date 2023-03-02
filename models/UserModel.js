import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const roles = {
  TRANSPORTADOR: 'TRANSPORTADOR',
  EMPACADOR: 'EMPACADOR',
  ADMINISTRADOR: 'ADMINISTRADOR',
  RECEPCIONISTA: 'RECEPCIONISTA',
  CLIENTE: 'CLIENTE',
  DISTRIBUIDOR: 'DISTRIBUIDOR'
}

const UserSchema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: Object.keys(roles),
      required: true
    }
  },
  { timestamps: true }
)

export const UserModel = model('user', UserSchema, 'user')
