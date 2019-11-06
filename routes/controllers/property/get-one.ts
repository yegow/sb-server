import { Request, Response } from "express";
import { Property } from "../../../models/property";
import { createResponse } from "../create-response";

const getOne = async (req: Request, res: Response) => {
    try {
        const property = await Property.findByPk(req.params.id)
        if (!property) {
            return res.json(createResponse(
                'fail',
                'No property by that identifier.'
            ));
        }

        res.json(createResponse(
            'success',
            property
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getOne
}
