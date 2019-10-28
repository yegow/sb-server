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
                    where: { id: Sequelize.col('review.userId')},
                    include: ['username', 'id']
                },
                {
                    model: Property,
                    where: { id: Sequelize.col('review.propertyId')},
                    include: ['title', 'type', 'category', 'location', 'id']
                }
            ]
        });

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
