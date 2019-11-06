import { Request, Response } from "express";
import { Category } from "../../../models/category";
import { createResponse } from "../create-response";

const edit = async (req: Request, res: Response) => {
    try {
        const category = await Category.update(
            req.body,
            {
                where: {id: req.params.id}
            }
        );
        console.log('Changed', category);
        res.json(createResponse(
            'success',
            category
        ));
    } catch(e) {
      console.error('**Throwing Error: %s', e.message);
      throw e;
    }
};

export {
    edit
}
