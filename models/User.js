const { Schema, models } = require('mongoose')

const userSchema = newSchema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: //match email, need validator
        },
        thoughts: [], //must be an array of the user's thoughts
        friends: [], //must be an array of the user's friends
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)