import { Request, Response } from "express";
import Sequelize from 'sequelize';

import { createResponse } from "../create-response";
import { Review } from "../../../models/review";
import { User } from "../../../models/user";
import { Property } from "../../../models/property";

const getAll = async (req: Request, res: Response) => {
    const {user, property, limit, sort} = req.query,
        opts:any = { where: {}};

    if (user) {
        opts.where.userId = user
    }
    if (property) {
        opts.where.propertyId = property
    }
    if (limit) {
        opts.limit = +limit;
    }
    if (sort) {
        opts.order = sort;
    }

    opts.include = [
        {
            model: User,
            attributes: ['username', 'id']
        },
        {
            model: Property,
            attributes: ['title', 'type', 'categoryId', 'location', 'id']
        }
    ]

    try {
        const reviews = await Review.findAll(opts);
        res.status(200).json(createResponse(
            'success',
            reviews
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getAll
}
