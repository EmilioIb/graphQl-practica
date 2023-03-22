import "./App.css";
import MyFirstComponent from "./components/MyFirstComponent";
import UsuarioComponent from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <UsuarioComponent
          name="Pancho Colate"
          age={25}
          address="Calle falsa 123"
          dob={new Date()}
        />
      </header>
    </div>
  );
}

export default App;
