import React, { useEffect, useState } from "react"
import Card from '../Card/Cards'
import './Products.css'


export default function Productos() {
    const [productos, setProductos] = useState()
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        fetch('https://api-pelis-back.onrender.com/celulares')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProductos(data)
                setisLoading(false)

            })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    else {
        return (
            <>
                <div className="celulares">
                    {productos.celulares.map((item, index) => {
                        return (
                            <Card item={item} key={index} />
                        )
                    })

                    }
                    
                </div>
            </>
            
        )
    }

}