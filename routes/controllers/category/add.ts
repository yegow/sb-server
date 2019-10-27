import { Request, Response } from "express";
import { Category } from "../../../models/category";
import { createResponse } from "../create-response";
import { checkFields } from "../checkFields";

const add = async (req: Request, res: Response) => {
    const props = checkFields(
        req.body,
        ['name'],
        ['name']
    );

    if (!props) {
        return res.status(400).json(
            createResponse(
                'fail',
                'Please provide all required fields the fields'
            )
        );
    }

    try {
        const category = await Category.create(props);
        res.status(201).json(createResponse(
            'success',
            category
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    add
}