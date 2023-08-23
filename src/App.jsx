import { products } from './mocks/products.json'
import { Productos } from './components/Productos.jsx'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Productos products={products} />
    </>
  )
}

export default App
