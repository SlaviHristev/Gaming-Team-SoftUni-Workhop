const { MongooseError } = require('mongoose');

exports.extractErrorMessages = (error) => {
    if (error && typeof error === 'object') {
        if (error instanceof MongooseError && error.name === 'ValidationError') {
            
            return Object.values(error.errors).map(x => x.message);
        } else {
           
            return [error.message];
        }
    } else {
        
        return ['An unexpected error occurred.'];
    }
};