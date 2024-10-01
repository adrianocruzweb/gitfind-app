import {Header} from '../../components/Header';
import background from '../../assets/background.png';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/17552862?v=4"
              className="profile"
              alt='imagem do perfil'
            />
            <div>
              <h3>Adriano Cruz</h3>
              <p>Descrição</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
