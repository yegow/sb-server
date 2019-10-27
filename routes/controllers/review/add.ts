import { Request, Response } from "express";

import { createResponse } from "../create-response";
import { checkFields } from "../checkFields";
import { Review } from "../../../models/review";

const add = async (req: Request, res: Response) => {
    const props = checkFields(
        req.body,
        ['userId', 'propertyId', 'comment', 'rating'],
        ['userId', 'propertyId', 'rating']
    );

    if (!props) {
        return res.json(
            createResponse(
                'fail',
                'Please provide all the required fields'
            )
        );
    }

    try {
        const review = await Review.create(props);
        res.status(201).json(createResponse(
            'success',
            review
        ));
    } catch(e) {
        console.error('\n*****');
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    add
}
