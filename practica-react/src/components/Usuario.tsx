import * as React from "react";
import Interfaz from "./Interfaz";
import Estudiante from "./Estudiante";

export default class UserComponent extends React.Component<Estudiante> {
  constructor(props: Estudiante) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Datos de estudiante</h1>
        Hola, <b>{this.props.name + " " + this.props.lastName}</b>
        <br />
        Edad: <b>{this.props.age}</b>
        <br />
        Genero: <b>{this.props.gender}</b>
        <br />
        Calificacion: <b>{this.props.score}</b>
      </div>
    );
  }
}
