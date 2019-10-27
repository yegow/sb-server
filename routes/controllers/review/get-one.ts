import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Review } from "../../../models/review";

const getOne = async (req: Request, res: Response) => {
    try {
        const review = await Review.findByPk(req.params.id)
        if (!review) {
            return res.status(204).json(createResponse(
                'fail',
                'No review by that identifier.'
            ));
        }

        res.status(200).json(createResponse(
            'success',
            review
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getOne
}
