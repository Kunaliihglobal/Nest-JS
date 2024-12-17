import { Document } from 'mongoose';

export interface User extends Document {
    idCard: number;
    email: string;
    lastname: string;
    name: string;
    phoneNumber: number;
}