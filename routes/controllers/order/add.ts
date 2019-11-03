import { Request, Response } from "express";
import Stripe from 'stripe';

import { createResponse } from "../create-response";
import { checkFields } from "../checkFields";
import { Order } from "../../../models/order";
import { Property } from "../../../models/property";

const catchError = (error: Error) => {
  console.error('\n*****');
  console.error('**Throwing Error: %s', error.message);

  throw error;
}

const add = async (req: Request, res: Response) => {
    console.log("ORDER BODY****", req.body);
    const fields = [
      'userId', 'propertyId', 'propertyPrice', 'propertyTitle', 'stripeToken', 'email', 'lastFour'
    ];
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
        const stripe = new Stripe(process.env.STRIPE_SECRET!)
        try {
          const charge = await stripe.charges.create({
            amount: Number(props.propertyPrice),
            currency: 'usd',
            description: props.PropertyTitle as string,
            source: props.stripeToken as string,
            statement_descriptor: `Order for #${props.propertyId}`,
          });

          const order = await Order.create({
            ...props,
            price: props.propertyPrice,
            card: props.lastFour
          });
          await Property.update(
            { status: 'booked' },
            { where: {
                id: props.propertyId
              }
            }
          );
          res.status(201).json(createResponse(
            'success',
            order
          ));
        } catch(e) {
          console.log("*****STRIPE ERROR", e.message);
          res.status(500).json(createResponse(
            'fail',
            e.message
          ));
        }
    } catch(e) {
        return catchError
    }
};

export {
    add
}
