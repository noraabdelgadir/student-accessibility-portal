var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	Schema for user for Database
*/
var UserSchema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId
        },
        utorid: {
            type: String, required: true
        },
        first_name: {
            type: String, required: true
        },
        last_name: {
            type: String, required: true
        },
        email: {
            type: String
        },
        password: {
            type: String, required: true
        },
        favourites: {
            nodes: Array,
            edges: Array
        },
        admin: {
        	type: Boolean, required: true, default: false
        },
    },
    {
        collection: 'Users'
    }
);

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('user', UserSchema);
