import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Review } from "../../../models/review";

const edit = async (req: Request, res: Response) => {
    const {comment, rating} = req.body;

    try {
        const review = await Review.update(
            { comment, rating },
            {
                where: {id: req.params.id}
            }
        );

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
    edit
}
