import {Image} from "@nextui-org/react";
import ButtonBuy from "./ButtonBuy";

export default function Card({nombre,imagen,valoracion,precio,descripcion,category})
{
    return(<>    
    
    <div className="bg-white border flex flex-row gap-4 my-3 border-gray-200 rounded-xl shadow dark:bg-[#191717] dark:border-[#191717]">
        <div className="flex flex-col h-full my-4 mx-4 gap-6">
            
                <Image
                    isBlurred
                    isZoomed            
                    src={imagen[1]}
                    width={300}
                    height={200}
                    alt="NextUI Album Cover"
                    classNames="m-5 max-w-screen-sm"
                />            
            
                <Image
                    isBlurred
                    isZoomed 
                    width={300}
                    height={200}           
                    src={imagen[2]}
                    alt="NextUI Album Cover"
                    classNames="m-5 max-w-screen-sm"
                />           
            
                <Image
                    isBlurred
                    isZoomed
                    width={300}
                    height={200}            
                    src={imagen[3]}
                    alt="NextUI Album Cover"
                    classNames="m-5 max-w-screen-sm"
                />
            
        </div>
        <div className="flex place-items-center">
        <Image
            isBlurred
            isZoomed            
            src={imagen[0]}
            alt="NextUI Album Cover"
            classNames="m-5 max-w-screen-md"
        />
        </div>   
        
        
        <div className="p-5 max-w-screen-sm flex flex-col items-center justify-center" >
            <div className="max-w-max items-center">
                <a href="#">
                    <h5 className="mb-2 text-clip text-left text-lg font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                </a>
                
                <p className="mb-3 font-normal flex-row inline-block text-gray-700 dark:text-gray-400"> Valoración: {valoracion}⭐
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">{descripcion}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${precio} COP</p>
                <ButtonBuy nombre={nombre} imagen={imagen} valoracion={valoracion} precio={precio}
                descripcion={descripcion} category={category} ></ButtonBuy>
                
            </div>
        </div>
    </div>


    
    </>)
}