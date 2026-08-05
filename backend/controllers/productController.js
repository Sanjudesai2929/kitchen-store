import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"
import mongoose from "mongoose"

// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller ,packOf,capacity} = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const image5 = req.files.image5 && req.files.image5[0]
        const image6 = req.files.image6 && req.files.image6[0]
        const image7 = req.files.image7 && req.files.image7[0]

        const images = [image1, image2, image3, image4, image5, image6, image7].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(),
            packOf: JSON.parse(packOf),
            capacity: JSON.parse(capacity)
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const updateProduct = async (req, res) => {
    try {

        let {
            id,
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller,
            packOf,
            capacity
        } = req.body;
id = new mongoose.Types.ObjectId(id)
        const product = await productModel.findById({ _id: id });

        if (!product) {
            return res.json({
                success: false,
                message: product
            });
        }

        let imagesUrl = [...product.image];

        for (let i = 1; i <= 7; i++) {

            const image = req.files[`image${i}`] && req.files[`image${i}`][0];

            if (image) {

                const result = await cloudinary.uploader.upload(image.path, {
                    resource_type: "image"
                });

                imagesUrl[i - 1] = result.secure_url;
            }
        }

        await productModel.findByIdAndUpdate(id, {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === "true",
            sizes: JSON.parse(sizes),
            packOf: JSON.parse(packOf),
            capacity: JSON.parse(capacity),
            image: imagesUrl
        });

        res.json({
            success: true,
            message: "Product Updated Successfully"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};
// function for list product
const listProducts = async (req, res) => {
    try {
        
        const products = await productModel.find({});
        res.json({success:true,products})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try {
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);

        res.json({
            success:true,
            product
        });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { listProducts, addProduct, removeProduct, singleProduct,updateProduct }