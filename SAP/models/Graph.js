var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	Schema for user for Graphs
*/
var GraphSchema = new Schema(
    {
        _id: {
            type: Number
        },
        name: {
            type: String, required: true
        },
        nodes: {
            middleNode: {
              mass: String,
              color: String,
              shape: String,
              label: String,
              link: String,
              parent: String
            },
            child1: {
              mass: String,
              color: String,
              shape: String,
              label: String,
              link: String,
              parent: String
            },
            child2: {
              mass: String,
              color: String,
              shape: String,
              label: String,
              link: String,
              parent: String
            },
            child3: {
              mass: String,
              color: String,
              shape: String,
              label: String,
              link: String,
              parent: String
            }
        },
        edges: {
            middleNode: {
              child1: {
                length: Number,
              },
              child2: {
                length: Number,
              },
              child3: {
                length: Number,
              }
            }
        }
    },
    {
        collection: 'Graphs'
    }
);

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('graphs', GraphSchema);
