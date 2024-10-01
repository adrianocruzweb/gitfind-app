import {useState} from 'react';
import {Header} from '../../components/Header';
import {ItemList} from '../../components/ItemList';
import background from '../../assets/background.png';
import './styles.css';

const App = () => {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const urlUser = `https://api.github.com/users/${user}`;

    const userData = await fetch(urlUser);
    const newUser = await userData.json();

    if(newUser.name){
      const {avater_url, name, bio} = newUser;
      setCurrentUser({avater_url, name, bio});
      const urlRepo = `https://api.github.com/users/${user}/repos`;

      const reposData = await fetch(urlRepo);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background" />
        <div className="info">
          <div>
            <input
            name="usuario"
            value={user}
            onChange={event=>setUser(event.target.value)}
            placeholder="@username"/>
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name? (
           <>
            <div className="perfil">
              <img
                src="https://avatars.githubusercontent.com/u/17552862?v=4"
                className="profile"
                alt='imagem do perfil'
                />
              <div>
                <h3>Adriano Cruz</h3>
                <span>@adrianocruzweb</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr/>
            {repos?.length? (
            <div>
              <h4 className='repositorio'>Repositórios</h4>
              <ItemList title="teste" description="teste de descrição" />
              <ItemList title="teste" description="teste de descrição" />
              <ItemList title="teste" description="teste de descrição" />
            </div>
            ) : null}
          </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
