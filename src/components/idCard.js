function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div className="idCard-border">
        <img src={picture} alt="profile pic" />
        <div className="texto">
          <p><b>First name:</b> {firstName}</p>
          <p><b>Last name:</b> {lastName}</p>
          <p><b>Gender:</b> {gender}</p>
          <p><b>Height:</b> {height}</p>
          <p><b>Birth:</b> {birth}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;