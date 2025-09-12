function ProductCard({myName,bee,cold}) {
    return(
        <div>
            <p>{myName}</p>
            <p>{bee}</p>
      <p>{cold===true?"true":"false"}</p>
        </div>
    )
}

export default ProductCard