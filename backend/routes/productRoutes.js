import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config({path: "../config.env"})

const productRouter = express.Router();

//#1 GET ALL PRODUCTS
productRouter.get(
    '/', 
    verifyToken,
    expressAsyncHandler(async (req, res) => {
        const products = await Product.find();
        res.send(products);
    })
);

//#2 GET PRODUCT BY ID
productRouter.get(
    '/:id', 
    verifyToken,
    expressAsyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id);
        if(product) {
            res.send(product);
        } 
        else{
            res.status(404).send({message: 'Product Not Found'});
        }
    })
);

//#3 CREATE NEW PRODUCT
productRouter.post(
    '/create',
    verifyToken,
    expressAsyncHandler(async (req, res) => {
        const newProduct = new Product({
            item: req.body.item,
            price: req.body.price,
            stock: req.body.stock,
            image: req.body.image
        });
        const product = await newProduct.save();
        res.send({ message: 'Product created', product});
    })
);

//#4 UPDATE A PRODUCT
productRouter.put(
    '/:id',
    verifyToken,
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if(product){
            item = req.body.item;
            price = req.body.price;
            stock = req.body.stock;
            image = req.body.image;
            await product.save();
            res.send({message: 'Product updated'});
        }
        else{
            res.status(404).send({message: 'Product not found'});
        }
    })
);

//#5 DELETE A PRODUCT
productRouter.delete(
    '/:id',
    verifyToken,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if(product){
          await product.remove();
          res.send({message: 'Product deleted'});
      }
      else{
          res.status(404).send({message: 'Product not found'});
      }
    })  
  );

//#6 VERIFY LOGIN
function verifyToken(request, response, next){
    const authHeaders = request.headers["authorization"]
    const token = authHeaders && authHeaders.split(' ')[1]
    if(!token){
        return response.status(401).json({message: "Authentication token is missing"})
    }
    
    jwt.verify(token, process.env.SECRETKEY, (error, user) => {
        if(error){
            return response.status(403).json({message:"Invalid token"})
        }
        request.body.user = user
        next()
    })

}

export default productRouter