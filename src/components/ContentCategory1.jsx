import Card from "./Card";
import { useState, useEffect } from "react";

export default function Content1(){ 

    const [productData, setProductData] = useState([])    

    useEffect(()=>{       
    
        let config = {
            headers:new Headers({
                "Content-Type": "application/json",                        
            }), 
        };
        const obtenerProductos = async()=>{
            
            config.method = "GET";        
            let res = await ( await fetch(`http://127.0.0.10:5029/producto/categoria1`,config)).json();
            console.log(res);
            setProductData(res);
            return res      
            
        }        
        obtenerProductos()       
    
    },[])    

    return(<>
    
        <section className="bg-white grid dark:h-screen dark:w-screen">
            <div className="flex items-center justify-center w-screen px-4 lg:gap-8 xl:gap-0 lg:grid-cols-12 xl:grid-cols">
                <div className="place-self-center lg:col-span-7"> 
                {productData?.data?.map((product) => <Card key={product._id} {...product}/>)}  
                </div>                           
            </div>
        </section>
    
    </>)
}