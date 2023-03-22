import * as React from "react";
const logo = "https://utlagunadurango.edu.mx/images/logo_utld_bis.png";

export default class MyFirstComponent extends React.Component<{}> {
  render() {
    return (
      <div>
        <h3>Nuestro primer componente en React usando TypeScript</h3>
        <div>
          <img src={logo} alt="Logo UTLD" height="250" />
        </div>
        <p>Emilio Ibarra Valdez</p>
        <p>Hola mundo</p>
      </div>
    );
  }
}

// const MyFirstComponent = () => {
//   return (
//     <div>
//       <h3>Nuestro primer componente en React usando TypeScript</h3>
//       <div>
//         <img src={logo} alt="Logo UTLD" height="250" />
//       </div>
//       <p>Emilio Ibarra Valdez</p>
//       <p>Hola mundo</p>
//     </div>
//   );
// };

// export default MyFirstComponent;
