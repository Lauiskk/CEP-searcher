import { FiSearch } from "react-icons/fi";
import {} from "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 74633420</h2>

        <span>Rua Teste sei la</span>
        <span> Complemento: Alguma coisa</span>
        <span>Vila rosa</span>
        <span>Campo Grande - RS</span>

      </main>

    </div>
  );
}

export default App;
