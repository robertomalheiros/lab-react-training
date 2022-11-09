function Rating(props) {
    const mystyle = {
        color: "black",
         padding: "10px",
        fontFamily: "Arial"
      };
    return (


    <div className = "Rat" style={mystyle}>
        {props.children}
    </div>)
  }
  
  export default Rating;