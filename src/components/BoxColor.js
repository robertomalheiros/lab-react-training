function BoxColor({r, g, b}) {
    const mystyle = {
        color: "black",
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: "10px",
        fontFamily: "Arial"
      };
    return (


    <div className = "BoxColor" style={mystyle}>
        <p>rgb({r},{g},{b})</p>
    </div>)
  }
  
  export default BoxColor;