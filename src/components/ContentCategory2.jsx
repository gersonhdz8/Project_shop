import Card from "./Card";
export default function ContentCategoria2(productData){ 
    return(<>
    
    <section className="bg-white grid dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black dark:max-w-screen dark:h-screen">
        <div className="grid items-center max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7"> 
            {productData.map((product) => (
                    <Card key={product._id} nombre={product.nombre} description={product.descripcion}
                        category={product.categoria} imagen={product.imagen[0]} precio={product.precio} valoracion={product.valoracion}/>
                ))}       

            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="src\assets\Imagen_libreria_LandingPage.png" alt=""/>
            </div>                
        </div>
    </section>
    
    </>)
}