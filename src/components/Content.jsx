import Card from "./Card";
import { useState, useEffect } from "react";

export default function Content(){ 

    const [productData, setProductData] = useState([])
    useEffect(()=>{   
        let config = {
            headers:new Headers({
                "Content-Type": "application/json",                        
            }), 
        };
        const obtenerProductos = async () => {
            try {
                config.method = "GET";        
                let res = await (await fetch(`http://127.0.0.10:5029/producto`, config)).json();
                //console.log(res);
                return res;
            } catch (error) {
                console.error("Error en la solicitud:", error);
                return [];
            }
        } 
        
        const fetchData = async () => {
            const datos = await obtenerProductos();
            setProductData(datos);
        }
        fetchData();
    },[])    

    return(<>    
    <section className="bg-white grid dark:max-w-max dark:h-screen dark:w-screen">
        <div className="flex items-center justify-center w-screen px-4 lg:gap-8 xl:gap-0 lg:grid-cols-12 xl:grid-cols">
            <div className=" place-self-center lg:col-span-7">                 
                {productData?.data?.map((product) => <Card key={product._id} {...product}/>)}                 
            </div>                           
        </div>
    </section>    
    </>)
}