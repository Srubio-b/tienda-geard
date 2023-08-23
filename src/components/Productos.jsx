import './Productos.scss'

export function Productos ({ products }) {
    return(
        <main className='products'>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                         />
                         <div>
                            <strong>{product.title}</strong>
                         </div>
                         <div>
                            Precio: {product.price}
                         </div>
                         <div className='button-container'>
                          
                            <button className='agregar'>Agregar</button>
                         </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}