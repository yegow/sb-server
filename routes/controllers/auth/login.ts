import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { User } from "../../../models/user";
import { createResponse } from "../create-response";

const login = async (req: Request, res: Response) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(401).json(
            createResponse(
                'fail',
                'Please provide all the required fields'
            )
        );
    }

    try {
        const user: UserDetails = await User.findOne({
                where: {
                    username: username
                }
            });
        
        if (!user) {
            return res.status(204).json(
                createResponse(
                    'fail',
                    'No user by that username found'
                )
            );
        }

        try {
            const valid = await bcrypt.compare(password, user.password!);

            if (!valid) {
                return res.status(401).json(
                    createResponse(
                        'fail',
                        'Incorrect credential combo.'
                    )
                );
            }
    
            res.json(
                createResponse(
                    'success',
                    {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        mobile: user.mobile,
                        address: user.address,
                    }
                )
            );
        } catch(e) {
            console.log('*******');
            console.log('LOGIN ERROR', e.message);
            console.log('*******');
            return res.status(500).json(createResponse(
                'fail',
                e.message
            ));
        }

        
    } catch(e) {
        console.error('**Throwing Error: %s', e.message);
        throw e;
    }
};

export {
    login
}