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
            //regex for email validation
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
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

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;