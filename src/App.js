import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import SignUp from './Component/Login';
function App() {
  const [page, setPage] = useState(0);

  

  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
