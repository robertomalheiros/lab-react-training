function Greetings(props) {
    /* se props.lang === "de" => Hallo */
    /* se props.lang === "fr => bonjour */
    let saudacao =''
    if(props.lang === 'de'){
        saudacao = `Hallo ${props.children}`
    } saudacao = `Bonjour ${props.children}`
    
    return (
    <div className = "greeText">

        <div key={props.lang}>{saudacao}</div>
        
    </div>)
  }
  
  export default Greetings;