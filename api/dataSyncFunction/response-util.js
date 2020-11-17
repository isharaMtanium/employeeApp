module.exports = {
    sendSuccessResponse: (httpCode, message) => {
        const code = 200;
        if (typeof httpCode === 'undefined') httpCode = code;

        let successResponse = {
            statusCode: httpCode,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            },
            body: message,
        };

        return successResponse;
    },
    sendErrorResponse: (httpCode, message) => {
        const code = 400;
        if (typeof httpCode === 'undefined') httpCode = code;
        let errorResponse = {
            statusCode: httpCode,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            },
            body: message,
        };
        return errorResponse;
    },
    errorObject: () => {
        return {
            error: {
                message: '',
                errors: [],
            },
        };
    },
};