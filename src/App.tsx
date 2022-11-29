import React from 'react';
import './App.css';

const App = ()=> {
  return (
    <div>
        <Header/>
        <Navbar/>
    </div>
  );
}

const Header = ()=> {
    return (
        <div className="Header">
            <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">Tests</a></li>
                <Input/>
            </ul>
        </div>
    )
}

const Input = ()=> {
    return (
        <form>
            <input/>
                <button>Search</button>
        </form>
        )
}

const Navbar = ()=> {
    return (
    <div>
      <ul className="Navbar">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JS</a></li>
        <li><a href="#">REACT</a></li>
      </ul>
    </div>
    );
}

export default App;
