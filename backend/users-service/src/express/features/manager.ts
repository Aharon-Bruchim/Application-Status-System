import { DocumentNotFoundError } from '../../utils/errors.js';
import { User, UserDocument } from './interface.js';
import { UsersModel } from './model.js';

export class UsersManager {
    static getByQuery = async (query: Partial<User>, step: number, limit?: number): Promise<UserDocument[]> => {
        return UsersModel.find(query, {}, limit ? { limit, skip: limit * step } : {})
            .lean()
            .exec();
    };

    static getCount = async (query: Partial<User>): Promise<number> => {
        return UsersModel.countDocuments(query).lean().exec();
    };

    static getById = async (userId: string): Promise<UserDocument> => {
        return UsersModel.findById(userId).orFail(new DocumentNotFoundError(userId)).lean().exec();
    };

    static createOne = async (user: User): Promise<UserDocument> => {
        return UsersModel.create(user);
    };

    static updateOne = async (userId: string, update: Partial<User>): Promise<UserDocument> => {
        return UsersModel.findByIdAndUpdate(userId, update, { new: true }).orFail(new DocumentNotFoundError(userId)).lean().exec();
    };

    static deleteOne = async (userId: string): Promise<UserDocument> => {
        return UsersModel.findByIdAndDelete(userId).orFail(new DocumentNotFoundError(userId)).lean().exec();
    };
}
