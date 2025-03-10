import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

//#1 GET ALL ORDERS
orderRouter.get(
    '/', 
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find({});
        res.send(orders);
    })
);

//#2 GET ORDER BY ID
orderRouter.get(
    '/:id',
    expressAsyncHandler(async (req,res) => {
        const order = await Order.findById(req.params.id);
        if(order){
            res.send(order)
        }
        else{
            res.status(404).send({message: 'Order not found'});
        }
    })
);

//#3 CREATE NEW ORDER
orderRouter.post(
    '/create',
    expressAsyncHandler(async (req, res) => {
        const newOrder = new Order({
            person : req.body.person,
            product : req.body.product,
            image: req.body.image,
            address : req.body.address,
            price : req.body.price,
            status: req.body.status,
            quantity: req.body.quantity
        });
        const order = await newOrder.save();
        res.send({message: 'Order created', order});
    })
);

//#4 UPDATE AN ORDER
orderRouter.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        if(order){
            order.person = req.body.person;
            order.product = req.body.product;
            order.image = req.body.image;
            order.address = req.body.address;
            order.price = req.body.price;
            order.status = req.body.status;
            order.quantity = req.body.quantity;
            await order.save();
            res.send({message: 'Order updated'});
        }
        else{
            res.status(404).send({message: 'Order not found'});
        }
    })
);

//#5 DELETE AN ORDER
orderRouter.delete(
    '/:id',
    expressAsyncHandler(async (req, res) =>{
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        if(order){
            await order.remove();
            res.send({message: 'Order deleted'});
        }
        else{
            res.status(404).send({message: 'Order not found'});
        }

    })
);

export default orderRouter