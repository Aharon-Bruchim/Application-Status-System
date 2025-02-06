import { DocumentNotFoundError } from '../../utils/errors.js';
import { System, SystemDocument } from './interface.js';
import { SystemsModel } from './model.js';

export class SystemsManager {
    static getByQuery = async (query: Partial<System>, step: number, limit?: number): Promise<SystemDocument[]> => {
        return SystemsModel.find(query, {}, limit ? { limit, skip: limit * step } : {})
            .lean()
            .exec();
    };

    static getCount = async (query: Partial<System>): Promise<number> => {
        return SystemsModel.countDocuments(query).lean().exec();
    };

    static getById = async (systemId: string): Promise<SystemDocument> => {
        return SystemsModel.findById(systemId).orFail(new DocumentNotFoundError(systemId)).lean().exec();
    };

    static createOne = async (system: System): Promise<SystemDocument> => {
        return SystemsModel.create(system);
    };

    static updateOne = async (systemId: string, update: Partial<System>): Promise<SystemDocument> => {
        return SystemsModel.findByIdAndUpdate(systemId, update, { new: true }).orFail(new DocumentNotFoundError(systemId)).lean().exec();
    };

    static deleteOne = async (systemId: string): Promise<SystemDocument> => {
        return SystemsModel.findByIdAndDelete(systemId).orFail(new DocumentNotFoundError(systemId)).lean().exec();
    };
}
