function CreditCard({type, number, expirationMonth, expirationYear,
   bank, owner, bgColor, color }) {
   
    const mystyle = {
      color: "white",
      backgroundColor: bgColor,
      padding: "10px",
      fontFamily: "Arial"
    };
  return (


  <div className = "cards" style={mystyle}>
    <p>{number}</p>
    <p>{expirationMonth}: {expirationYear}</p>
      
    <p>{color}</p>
    <p>{owner}</p>

  </div>)
}

export default CreditCard;