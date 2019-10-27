type Body = {
    [key: string]: string | number
}

export const checkFields = (
    body: Body, 
    wantedFields: string[],
    required?: string[]
): ResBodyInterface | null => {
    const temp: ResBodyInterface = {};
    wantedFields.forEach((f: string) => {
        temp[f] = body[f];
    });

    if (required && required.length) {
        const allIn = required.every(r => !!temp[r]);

        if (!allIn) {
            return null;
        }
    }

    return temp
};