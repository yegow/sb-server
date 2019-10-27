import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Order } from "../../../models/order";

const destroy = async (req: Request, res: Response) => {
    try {
        await Order.destroy(
            {
                where: {id: req.params.id}
            }
        );

        res.status(200).json(createResponse(
            'success',
            'Order destroyed successfully.'
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    destroy
}