const mgoose = require('mongoose');

const schema = new mgoose.Schema({
        title: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 50
        },
        text: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 300
        },
        author: {
            type: String,
            required: true,
        }

    }, 
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    }

);

module.exports = mgoose.model('Post', schema);