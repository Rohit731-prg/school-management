import Hostel from "../models/hostel.model.js";

export const addHostel = async (req, res) => {
    const { name, roomNumber, roomType, numberBed, costPerBed } = req.body;

    if (!name || !roomNumber || !roomType || !numberBed || !costPerBed) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const newHostel = new Hostel({
            name,
            roomNumber,
            roomType,
            numberBed,
            costPerBed
        });

        await newHostel.save();
        res.status(201).json({ success: true, message: 'Hostel added successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find();
        res.status(200).json({ success: true, data: hostels });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}