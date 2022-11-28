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
                <li><a href="#">Главная</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">О нас</a></li>
            </ul>
        </div>
    )
}

const Navbar = ()=> {
    return (
      <ul className="Navbar">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JS</a></li>
        <li><a href="#">REACT</a></li>
      </ul>
    );
}

export default App;
