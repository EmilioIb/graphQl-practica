import "./App.css";
import MyFirstComponent from "./components/MyFirstComponent";
import UsuarioComponent from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <UsuarioComponent
          name="Pancho"
          lastName="Colate"
          age={25}
          score={9}
          gender="Male"
        />
      </header>
    </div>
  );
}

export default App;
