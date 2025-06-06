import mongoose, { Schema } from 'mongoose';

const accountSchema = new Schema({
    name: { type: String, required: true },
    expenseType: { type: String, required: true, },
    amount: { type: Number, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true, enum: ['Pain', 'Due'] },
    Date: { type: Date, default: Date.now },
});

const Account = mongoose.model('Account', accountSchema);
export default Account;