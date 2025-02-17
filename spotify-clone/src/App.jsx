import Login from './components/Login';
import { useStateProvider } from './utils/StateProvider';
import React, {useEffect} from 'react';
import { reducerCases } from './utils/Constants';
import Spotify from './components/Spotify';


function App() {
  const [{ token }, dispatch]= useStateProvider();

  useEffect(()=>{
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");
    console.log("Token:", token);
    dispatch({type: reducerCases.SET_TOKEN, token})
  }, [token, dispatch]);
  return (
    <div>
      {
        token ? <Spotify/> :
        <Login/>
      }
    </div>
  );
}

export default App;
