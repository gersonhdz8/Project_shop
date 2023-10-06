import { validationResult } from 'express-validator';
import { conexion } from "../../db/conexion.js";
import { DTO } from "../validate/producto.js";
const db = await conexion();

export const getProductoV1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});   

    res.status(200).json({data: await db.collection("products").find({}).toArray()})
}
export const getProductoCategoria1V1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});   

    res.status(200).json({data: await db.collection("products").find({categoria:"Zapatos deportivos"}).toArray()})
}
export const getProductoCategoria2V1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});   

    res.status(200).json({data: await db.collection("products").find({categoria:"Camisa Oversize"}).toArray()})
}
export const getProductoCategoria3V1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});   

    res.status(200).json({data: await db.collection("products").find({categoria:"Pantalones"}).toArray()})
}
export const getProductoCategoria4V1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});   

    res.status(200).json({data: await db.collection("products").find({categoria:"Chaquetas"}).toArray()})
}
export const getProductoCategoria5V1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});   

    res.status(200).json({data: await db.collection("products").find({categoria:"Bolsos"}).toArray()})
}

export const postProductoV1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
    const {errors} = validationResult(req);
    if (errors.length) return res.status(400).json({ errors });


    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
    const collection = db.collection("products");
    res.status(201).json({data: await collection.insertOne(req.body)})
}