import { useCartStore } from "../stateCarrito/carStore";
import { useState } from "react";

export default function  CardDetails({imagen,nombre,valoracion,descripcion,precio})
{
    const {addToCart} = useCartStore();
    const [cantidad,setCantidad] = useState(1)

    return(
        <>
            
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={imagen} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                </a>
                <div className="flex justify-around mt-2.5 mb-5">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>                    
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3 place-content-stretch">Valoración: {valoracion}</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white justify-items-end">${precio}</span>

                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <label htmlFor="visitors" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
                        <input type="number" value={cantidad}  min={1} id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) =>
                        setCantidad(e.target.value)} />
                    </div>
                    <button  className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart({imagen,nombre,valoracion,descripcion,precio,cantidad})}>Add to cart</button>
                </div>
            </div>
        </div>

        </>
    )
}