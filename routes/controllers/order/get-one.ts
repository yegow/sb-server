import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Order } from "../../../models/order";

const getOne = async (req: Request, res: Response) => {
    try {
        const order = await Order.findByPk(req.params.id)
        if (!order) {
            return res.json(createResponse(
                'fail',
                'No order by that identifier.'
            ));
        }

        res.json(createResponse(
            'success',
            order
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getOne
}
