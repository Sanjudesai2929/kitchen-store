import {v2 as cloudinary } from "cloudinary"

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: "x0imsfyi",
        api_key:356513967417316,
        api_secret:"2ccY12Sf62OrKLNaiGfUSRy2J64"
    })

}

export default connectCloudinary;