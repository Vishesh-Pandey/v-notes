import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Account from './components/Account';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom'


/*
4 important API's

1 signup = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/signup
2 login = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/login
3 add notes = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/add
4 fetch notes = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/fetch

*/

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/v-notes" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


      </Routes>



    </>
  );
}

export default App;
