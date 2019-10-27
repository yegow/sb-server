import { Request, Response } from "express";

import { createResponse } from "../create-response";
import { checkFields } from "../checkFields";
import { Order } from "../../../models/order";

const add = async (req: Request, res: Response) => {
    const fields = ['userId', 'propertyId'];
    const props = checkFields(
        req.body,
        fields,
        fields
    );

    if (!props) {
        return res.status(400).json(
            createResponse(
                'fail',
                'Please provide all the required fields'
            )
        );
    }

    try {
        const property = await Order.create(props);
        res.status(201).json(createResponse(
            'success',
            property
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
