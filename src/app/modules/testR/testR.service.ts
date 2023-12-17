import { ITest } from "./testR.interface";
import { Test } from "./testR.model";

const create = async(test: ITest) : Promise<ITest> => {
    const result = await Test.create(test)

    return result
};

export const testService = {
    create
}