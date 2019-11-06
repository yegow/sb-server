import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Review } from "../../../models/review";
import { User } from "../../../models/user";
import { Property } from "../../../models/property";

const getOne = async (req: Request, res: Response) => {
    try {
        const review = await Review.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['username', 'id']
                },
                {
                    model: Property,
                    attributes: ['title', 'type', 'categoryId', 'location', 'id']
                }
            ]
        });

        if (!review) {
            return res.json(createResponse(
                'fail',
                'No review by that identifier.'
            ));
        }

        res.json(createResponse(
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
