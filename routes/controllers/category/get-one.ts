import { Request, Response } from "express";
import { Category } from "../../../models/category";
import { createResponse } from "../create-response";

const getOne = async (req: Request, res: Response) => {
    try {
        const category = await Category.findByPk(req.params.id)
        if (!category) {
            return res.status(204).json(createResponse(
                'fail',
                'No category by that identifier'
            ));
        }

        res.status(200).json(createResponse(
            'success',
            category
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getOne
}
