import Account from "../models/account.model.js";

export const createAccount = async (req, res) => {
    const { name, expenseType, amount, phone, email, status } = req.body;
    if ( !name || !expenseType || !amount || !phone || !email || !status ) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    try {
        const account = await Account.findOne({ email });
        if (account) {
            return res.status(400).json({ success: false, message: 'Account with this email already exists' });
        }
        const newAccount = new Account({
            name,
            expenseType,
            amount,
            phone,
            email,
            status
        });
        await newAccount.save();
        res.status(201).json({ success: true, message: 'Account created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json({ success: true, data: accounts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}