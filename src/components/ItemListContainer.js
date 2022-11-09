import * as React from 'react'
import { useState } from 'react'

function ItemListContainer() {
    const [clicks, setClicks] = useState(0);

    return (
        <div>
            <input type="number"></input>
            <button onClick={() => {setClicks(clicks + 1);}}>Agregar al carrito</button>
            <h3>Clicks: {clicks}</h3>
        </div>
    );
}

export default ItemListContainer