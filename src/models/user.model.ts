import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from '../interfaces/user.interface';
const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});

// UserSchema.methods.toJSON = function () {
//     const { _id, password, user } = this.toObject();
//     user.uid = _id;
//     return user;
// }

UserSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

UserSchema.methods.matchPassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export const userModel = model('User', UserSchema);

