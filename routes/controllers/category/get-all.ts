import { Request, Response } from "express";
import { Category } from "../../../models/category";
import { createResponse } from "../create-response";

const getAll = async (req: Request, res: Response) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(createResponse(
            'success',
            categories
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getAll
}