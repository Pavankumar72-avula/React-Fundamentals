import "./ProductCard.css"
function ProductCard(uno) {
    const yoStyle={
        fontSize:'30px',
        color:'goldenrod'
    }
    return(
        <div className="container">
            <p style={yoStyle}>{uno.myName}</p>
            <p className="xo">{uno.bee}</p>
            {/* condition: cold */}
      {uno.cold !== undefined && (
        <p className={uno.cold ? "available" : "not"}>
          {uno.cold ? "it is available" : "not"}
        </p>
      )}

      {/* condition: ford */}
      {uno.ford !== undefined && (
        <p className={uno.ford ? "available" : "not"}>
          {uno.ford ? "it is available" : "not"}
        </p>
      )}
        </div>
    )
}

export default ProductCard



/*
/*function App() {
  const productName = "Pencil";
  //const isAvailable1 = true;
  //const isAvailable2 = false;
    const price = "9";
    const isAvailable = false;
const isXo=true;

  return (
    <div className="container1">
      <p className="card1"><ProductCard  myName={productName} bee={price} cold={isAvailable}/></p>
      <p className="card2"><ProductCard  myName={productName}  bee={price} ford={isXo}/></p>
    </div> */