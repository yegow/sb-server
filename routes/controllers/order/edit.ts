import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Order } from "../../../models/order";

const edit = async (req: Request, res: Response) => {
    const opts: {status?: string} = {},
        {status} = req.body;

    if (status) {
        opts.status = status;
    }
    
    try {
        const order = await Order.update(
            opts,
            {
                where: {id: req.params.id}
            }
        );

        res.status(200).json(createResponse(
            'success',
            order
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    edit
}
