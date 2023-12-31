import React, { useState } from 'react'

function ItemCount( {cantidad, sumar, restar, onAdd }) {

    
  return (
    <div>
        <div className="btn bg-white border border-secondary px-2">
            <button className="btn px-3 text-primary fs-5" onClick={restar}><i className="bi bi-dash"/></button>
            <span className="px-5" >{cantidad}</span>
            <button className="btn px-3 text-primary fs-5 " onClick={sumar}><i className="bi bi-plus"/></button>
        </div>
        <div>
            <button className="border border-primary px-5 py-1 bg-white rounded text-primary " onClick={ () => {onAdd(cantidad)}}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount