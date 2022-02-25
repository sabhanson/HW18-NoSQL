const { get } = require('http');
const { Schema, models } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //need to make a get to get the time in the correct format
        },
        username: {
            type: String,
            required: true
        },
        reactions: [] //array of the reactions that belong to this thought
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

