import * as React from "react";
import Interfaz from "./Interfaz";

export default class UserComponent extends React.Component<Interfaz> {
  constructor(props: Interfaz) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>User component</h1>
        Hola, <b>{this.props.name} </b>
        <br />
        Edad: <b>{this.props.age}</b>
        <br />
        Direccion: <b>{this.props.address}</b>
        <br />
        Fecha de nacimiento: <b>{this.props.dob.toDateString()}</b>
      </div>
    );
  }
}
