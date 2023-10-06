import {Image} from "@nextui-org/react";

export default function Card({nombre,imagen,valoracion,precio,description,category})
{
    return(<>    

    
    
    <div className="bg-white border border-gray-200 rounded-xl shadow dark:bg-[#191717] dark:border-[#191717]">        
        <Image
            isBlurred
            isZoomed            
            src={imagen}
            alt="NextUI Album Cover"
            classNames="m-5 max-w-screen-md"
        />
        
        <div className="p-5 max-w-screen-md">
            <a href="#">
                <h5 className="mb-2 text-clip text-left text-lg font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{valoracion}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{precio}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text- bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-[#3D2C8D]dark:hover:bg-blue-700 dark:focus:ring-blue-500">
                To Reserve
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>


    
    </>)
}