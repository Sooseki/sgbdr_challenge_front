
import React from "react";

const STYLES = [
  "btn--primary",
]
const SIZES = ["btn--medium", "btn-small"];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];   
  return{
    <button className={`btn ${checkButtonStyle}   ${checkButtonSize}`} onClick ={onClick} type={type}>
      {children}
    </button>
  }
}





//export function Button(props) {
 // return (
   // <button className="btn btn-primary" type="submit">
   //   {props.text}
  //  </button>
  //);
//}





// const Button = styled.button `
//     background-color : #000;
//     color: white;
//     padding:5px 15px;
//     border-radius: 5px;
//     text-transform: uppercase;
//     cursor: pointer;
//     box-shadow : 0px 2px 2px lightgray;
// `

// export const Button =() {
//     return (
//         <div>
//       <Button type="button"
//         title={title}
//         onClick={action}>
//         </Button>
//       </div>
//       );
//   }