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