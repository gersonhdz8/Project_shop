import {Router} from "express";
import routesVersioning from 'express-routes-versioning';
import { limitGetProducto, limitPostProducto } from "../helpers/rateLimit.js";
import { getProductoV1,getProductoCategoria1V1,getProductoCategoria2V1,getProductoCategoria3V1,getProductoCategoria4V1,getProductoCategoria5V1,postProductoV1 } from "../version/v1/producto.js";

const version = routesVersioning();
const appProducto = Router();
// accept-version

appProducto.get("/", limitGetProducto(), version({
    "1.0.0": getProductoV1,
}));
appProducto.get("/categoria1", limitGetProducto(), version({
    "1.0.0": getProductoCategoria1V1,
}));
appProducto.get("/categoria2", limitGetProducto(), version({
    "1.0.0": getProductoCategoria2V1,
}));
appProducto.get("/categoria3", limitGetProducto(), version({
    "1.0.0": getProductoCategoria3V1,
}));
appProducto.get("/categoria4", limitGetProducto(), version({
    "1.0.0": getProductoCategoria4V1,
}));
appProducto.get("/categoria5", limitGetProducto(), version({
    "1.0.0": getProductoCategoria5V1,
}));

appProducto.post("/", limitPostProducto(), version({
    "1.0.0": postProductoV1,
}));

export default appProducto;