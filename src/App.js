
import { Link } from 'react-router-dom';
import Routers from './routes/index'
import StateContext from './components/context'
import { useState } from 'react';

function App() {

  const [state, setState] = useState("text from context");

  const updateState = (newState) => {
    setState(newState);
  };
  return (
    <StateContext.Provider value={{ state, updateState }}>
    <div className="App">
        <header className="App-header">
          <Link to={"/"}>Home</Link>||
          <Link to={"/about"}>about</Link>
        </header>
        <Routers ></Routers>
    </div>
    </StateContext.Provider>
  );
}

export default App;
