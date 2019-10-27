import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../../../models/user";
import { createResponse } from "../create-response";
import { checkFields } from "../checkFields";

const signUp = async (req: Request, res: Response) => {
    const props = checkFields(
        req.body,
        ['firstName', 'lastName', 'email', 'username', 'mobile', 'address', 'password'],
        ['firstName', 'lastName', 'email', 'username', 'password']
    );

    if (!props) {
        return res.status(200).json(
            createResponse(
                'fail',
                'Please provide all the required fields'
            )
        );
    }

    try {
        let {password, ...rest} = props,
            hashedPassword = await bcrypt.hash(password, 2);
        
        const user: UserDetails = await User.create({
            password: hashedPassword,
            ...rest
        });

        res.status(201).json(createResponse(
            'success',
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                mobile: user.mobile,
                address: user.address,
            }
        ));
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    signUp
}
