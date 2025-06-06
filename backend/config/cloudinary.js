import {v2 as cloudinary} from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_KEY,
    api_secret: process.env.CLOUDE_SECRET
});

export default cloudinary;