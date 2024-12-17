import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    idCard: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});