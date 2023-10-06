import {Link} from "react-router-dom"
import Carrito from "./Carrito"

export default function Navbar ()
{
    return(
    <>    
        <header className="">
            <nav className="bg-white flex justify-center border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black h-20 dark:flex ">
                <div className="flex justify-between justify-items-center max-w-screen-xl gap-1 h-full">                    
                    
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col justify-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="flex items-center justify-center">
                                <Link to="/categoria1" className="flex py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-gray-400 lg:p-0 dark:text-white lg:dark:hover:text-white" >Zapatos deportivos</Link>
                            </li>
                            <li className="flex items-center justify-center">
                                <Link to="/categoria2" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" >Camisa Oversize</Link>
                            </li>
                            <li className="flex items-center justify-center">
                                <Link to="/categoria3" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" >Pantalones</Link>
                            </li>
                            <li className="flex items-center justify-center">
                                <Link to="/categoria4" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" >Chaquetas</Link>
                            </li>
                            a
                            <li className="flex items-center justify-center">
                                <Link to="/categoria5" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" >Bolsos</Link>
                            </li>                                                         
                            <Carrito></Carrito>
                            
                            
                        </ul>
                    </div>                    
                </div>
            </nav>
        </header>
    </>)
}