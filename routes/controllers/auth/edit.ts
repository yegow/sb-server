import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../../../models/user";
import { createResponse } from "../create-response";

const edit = async (req: Request, res: Response) => {
    try {
        let {password, ...rest} = req.body,
            hashedPassword;

        const queryObj = {...rest};
        
        if (password) {
            hashedPassword = await bcrypt.hash(password, 2);
            queryObj.password = hashedPassword;
        }

        const user: UserDetails = await User.update(
            queryObj
            ,
            {
                where: { id: req.params.id }
            }
        );
        
        res.json(
            createResponse(
                'success',
                user
            )
        );
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    edit
}
