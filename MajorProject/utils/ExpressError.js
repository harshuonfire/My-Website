class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.superstatusCode = statusCode;
        this.message == message;
    }
} 

module.exports = ExpressError;