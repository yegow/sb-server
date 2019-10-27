import { Request, Response } from "express";
import { Property } from "../../../models/property";
import { createResponse } from "../create-response";

const getAll = async (req: Request, res: Response) => {
    const {type, limit, sort} = req.query,
        opts:any = {};

    if (type) {
        opts.where = {
            type: type
        }
    }
    if (limit) {
        opts.limit = +limit;
    }
    if (sort) {
        opts.order = [sort];
    }

    try {
        const properties = await Property.findAll(opts);
        res.status(200).json(createResponse(
            'success',
            properties
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getAll
}
