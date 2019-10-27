export const createResponse = (status: ResStatus, result: any): ResBody => {
    return {
        status: status,
        result: result
    }
};