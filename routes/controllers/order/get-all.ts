import { Request, Response } from "express";
import { createResponse } from "../create-response";
import { Order } from "../../../models/order";
import { Property } from "../../../models/Property";
import { User } from "../../../models/User";

const getAll = async (req: Request, res: Response) => {
    const {user, property, limit, sort} = req.query,
        opts:any = { where: {} };

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
            model: Property,
            attributes: ['title', 'type', 'categoryId', 'location', 'id']
        },
        {
          model: User,
          attributes: ['id', 'username']
        }
    ]


    try {
        const orders = await Order.findAll(opts);
        res.status(200).json(createResponse(
            'success',
            orders
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    getAll
}
