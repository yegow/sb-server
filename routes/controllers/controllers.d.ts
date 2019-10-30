interface UserDetails {
    id?: number;
    firstName: string,
    lastName: string,
    email?: string,
    username: string,
    mobile?: string,
    address?: string,
    password?: string,
    role?: string
}

interface PropertyDetails {
    category: string
    type: string
    location:string
    price:string
    image: string
    description?: string
}

type Status = 'in-progress' | 'delivered' | 'canceled';

interface OrderDetails {
    propertyId?: string,
    userId?: string,
    status?: Status
}

type ResStatus = 'success' | 'fail';

type ResBody = {
    status: ResStatus
    result: any
};

type ResBodyInterface = {
    [key: string]: string | number
}
