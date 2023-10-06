import {Link} from "react-router-dom"
import Content from "./Content"
import { useState } from "react";
import ContentCategory1 from './ContentCategory1.jsx';
import ContentCategory2 from './ContentCategory2.jsx';
import ContentCategory3 from './ContentCategory3.jsx';
import ContentCategory4 from './ContentCategory4.jsx';
import ContentCategory5 from './ContentCategory5.jsx';

export default function Navbar ()
{
    const [productData, setProductData] = useState([]);
    //const [showAll, setShowAll] = useState(true);
    const [showCategoria1, setShowCategoria1] = useState(false);
    const [showCategoria2, setShowCategoria2] = useState(false);
    const [showCategoria3, setShowCategoria3] = useState(false);
    const [showCategoria4, setShowCategoria4] = useState(false);
    const [showCategoria5, setShowCategoria5] = useState(false);

    let config = {
        headers:new Headers({
            "Content-Type": "application/json",                        
        }), 
    };            
    const obtenerProductos = async()=>{
        
        config.method = "GET";        
        let res = await ( await fetch(`http://127.0.0.10:5029/producto`,config)).json();
        console.log(res);
        setProductData(res);
        return res      
        
    }
    const obtenerProductos1 = async()=>{
        
        config.method = "GET";        
        let res = await ( await fetch(`http://127.0.0.10:5029/producto/categoria1`,config)).json();
        console.log(res);
        setProductData(res);
        return res      
        
    }  
    const obtenerProductos2 = async()=>{
        
        config.method = "GET";        
        let res = await ( await fetch(`http://127.0.0.10:5029/producto/categoria2`,config)).json();
        console.log(res);
        setProductData(res);
        return res      
        
    }
    const obtenerProductos3 = async()=>{
        
        config.method = "GET";        
        let res = await ( await fetch(`http://127.0.0.10:5029/producto/categoria3`,config)).json();
        console.log(res);
        setProductData(res);
        return res      
        
    }  
    const obtenerProductos4 = async()=>{
        
        config.method = "GET";        
        let res = await ( await fetch(`http://127.0.0.10:5029/producto/categoria4`,config)).json();
        console.log(res);
        setProductData(res);
        return res      
        
    }  
    const obtenerProductos5 = async()=>{
        
        config.method = "GET";        
        let res = await ( await fetch(`http://127.0.0.10:5029/producto/categoria5`,config)).json();
        console.log(res);
        setProductData(res);
        return res      
        
    }      
    /* const showAllProducts = async() => {
        obtenerProductos()
        setShowAll(false);
      }; */    
      
      const showCategoria11 = () => {
        obtenerProductos1()
        setShowCategoria1(true);
      };
      const showCategoria22 = () => {
        obtenerProductos2()
        setShowCategoria2(true);
      };
      const showCategoria33 = () => {
        obtenerProductos3()
        setShowCategoria3(true);
      };
      const showCategoria44 = () => {
        obtenerProductos4()
        setShowCategoria4(true);
      };
      
      const showCategoria55 = () => {
        obtenerProductos5()
        setShowCategoria5(true);
      };

    return(
    <>    
        <header className="">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black h-20 ">
                <div className="flex justify-between justify-items-center max-w-screen-xl gap-1 h-full">                    
                    
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/categoria1" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-gray-400 lg:p-0 dark:text-white lg:dark:hover:text-white" onClick={showCategoria11}>Zapatos deportivos</Link>
                            </li>
                            <li>
                                <Link to="/categoria2" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" onClick={showCategoria22}>Camisa Oversize</Link>
                            </li>
                            <li>
                                <Link to="/categoria3" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" onClick={showCategoria33}>Pantalones</Link>
                            </li>
                            <li>
                                <Link to="/categoria4" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" onClick={showCategoria44}>Chaquetas</Link>
                            </li>
                            a
                            <li>
                                <Link to="/categoria5" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" onClick={showCategoria55}>Bolsos</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        {showCategoria1 && <ContentCategory1 productData={productData} />}
        {showCategoria2 && <ContentCategory2 productData={productData} />}
        {showCategoria3 && <ContentCategory3 productData={productData} />}
        {showCategoria4 && <ContentCategory4 productData={productData} />}
        {showCategoria5 && <ContentCategory5 productData={productData} />}
        

    
    </>)
}