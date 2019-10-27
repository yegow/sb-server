import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { checkFields } from "../checkFields";
import { Property } from "../../../models/property";

const add = async (req: Request, res: Response) => {
    const props = checkFields(
        req.body,
        ['title', 'category', 'type', 'location', 'price', 'image', 'description'],
        ['title', 'category', 'type', 'location', 'price', 'image']
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
        const property = await Property.create(props);
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
