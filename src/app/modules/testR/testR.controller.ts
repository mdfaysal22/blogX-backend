import { NextFunction, Request, Response } from "express";
import { testService } from "./testR.service";

const create = async(req: Request, res: Response, next: NextFunction) => {

    const test = req.body;
    const result = await testService.create(test);
    res.status(200).json({
        status: 200,
        message: "post test",
        data: result
    })
};

export const testController = {
    create
}