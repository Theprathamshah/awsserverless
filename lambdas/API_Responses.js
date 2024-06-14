
const Responses = {
    _200(data) {
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    },
    _400(data) {
        return {
            statusCode: 400,
            body: JSON.stringify(data),
        };
    },
    _404(data) {
        return {
            statusCode: 404,
            body: JSON.stringify(data),
        };
    },
    _500(data) {
        return {
            statusCode: 500,
            body: JSON.stringify(data),
        };
    },
};
