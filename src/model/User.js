const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'user name must require'],
        },
        email: {
            type: String,
            required: [true, 'Email must require'],
            unique: true,
            validate: [validator.isEmail, 'invalid Email'],
        },
        password: {
            type: String,
            require: [true, 'Password is require'],
            minlength: 8,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt)
    next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;