import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Account from './components/Account';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';


/*
4 important API's

1 signup = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/signup
2 login = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/login
3 add notes = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/add
4 fetch notes = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/fetch
5 delete notes = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete
6 delete specific note = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_data/delete_note
7 delete account = https://apex.oracle.com/pls/apex/visheshpandey/v_notes_auth/delete_account?username=vishesh

*/

function App() {

  const [account, setAccount] = useState("")

  const confirmLogin = (account) => {
    setAccount(account);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/account' element={<Account account={account} />} />
        <Route path="/v-notes" element={<Login confirmLogin={confirmLogin} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>



    </>
  );
}

export default App;
