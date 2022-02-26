const { Schema, model } = require('mongoose');
const moment = require('moment');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {type: Date,
            default: Date.now,
            get: (getTime)=> {moment(getTime).format('MMMM Do YYYY, h:mm:ss a')}
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

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
            get: (getTime)=> {moment(getTime).format('MMMM Do YYYY, h:mm:ss a')}
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema] //array of the reactions that belong to this thought
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)


thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought',thoughtSchema);

module.exports = Thought;