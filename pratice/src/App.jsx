import ProductCard from "./ProductCard.jsx"

function App() {
  const productName = "Pencil";
    const price = "9";
    const isAvailable = false;


  return (
    <div>
     <ProductCard myName={productName} bee={price} cold={isAvailable}/>

     
    </div>
  )
}

export default App
