import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import CardDetails from "./CardDetails";


export default function ButtonBuy({nombre,imagen,valoracion,precio,descripcion,category}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('blur')

    

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    return (
        <>
        <div className="flex flex-wrap gap-3 text-bold">

            {backdrops.map((b) => (
            <Button  
                key={b}
                variant="flat" 
                color="primary" 
                onPress={() => handleOpen(b)}
                className="capitalize bg-indigo-700 text-base font-medium hover:bg-indigo-900 text-white"
            >            
            Agregar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            </Button>
            ))}  
        </div>
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Detalle del producto</ModalHeader>
                <ModalBody>
                    <CardDetails nombre={nombre} imagen={imagen} valoracion={valoracion} precio={precio} descripcion={descripcion} category={category}></CardDetails>                    
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onPress={onClose} className="bg-red-500 text-white hover:bg-red-700">
                    Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                    Action
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
    }
