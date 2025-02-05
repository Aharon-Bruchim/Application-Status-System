import mongoose from 'mongoose';
import { config } from '../../config.js';
import { UserDocument } from './interface.js';

const UserSchema = new mongoose.Schema<UserDocument>(
    {
        name: {
            type: String,
            required: true,
        },
        IDfNumber: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        versionKey: false,
    },
);

export const UsersModel = mongoose.model<UserDocument>(config.mongo.featuresCollectionName, UserSchema);
