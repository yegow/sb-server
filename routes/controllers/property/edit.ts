import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Property } from "../../../models/property";

const edit = async (req: Request, res: Response) => {
    try {
        const body: PropertyDetails = req.body;
        const property = await Property.update(
            body,
            {
                where: {id: req.params.id}
            }
        );

        res.status(200).json(createResponse(
            'success',
            property
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    edit
}
