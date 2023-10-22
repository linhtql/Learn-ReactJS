// CSS Stylessheet
import "./Header.css";

// Inline Styling
const Header = () => {
  // Javascript Object
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      {/* <h1 style={{ color: "red", backgroundColor: "lightblue" }}>Hello Style!</h1> */}

      {
        // Javascript Object
      }
      {/* <h1 style={myStyle}>Hello Style!</h1> */}
      {
        // CSS StyleSheet
      }
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};

export default Header;
