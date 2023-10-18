import React from 'react'
import { useLocation } from 'react-router-dom'
import './VistaDetalle.css'


export default function VistaDetalle() {
    const location = useLocation();
    let item = location.state
    console.log(item)

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={item.image} alt="" />
                    </div>

                    <div className="col">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p><strong>{item.price}</strong></p>
                    </div>
                </div>
            </div>

        </>
    )
}