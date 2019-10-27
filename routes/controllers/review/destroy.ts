import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Review } from "../../../models/review";

const destroy = async (req: Request, res: Response) => {
    try {
        await Review.destroy(
            {
                where: {id: req.params.id}
            }
        );

        res.status(200).json(createResponse(
            'success',
            'Review destroyed successfully.'
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    destroy
}
