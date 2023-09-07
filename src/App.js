import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
import Day1 from './day/Day1.js';
import Day2 from './day/Day2.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>
          Hi, this is my 'advent of code | 2021' challenge
        </h1>
        <h2>
          You can find each challenge below:
        </h2>
        <ul className='App-list'>
          {/* <li><NavLink to='/home' onClick={this.removeActiveNav}><img className='nav-li' alt='home' src={homeNav}/></NavLink></li> */}
          <li className='App-list-item'><NavLink to='/day1' className='App-link'>day 1</NavLink></li>
          <li className='App-list-item'><NavLink to='/day2' className='App-link'>day 2</NavLink></li>
        </ul>
      </header>
    </div>

    <main className='App-main'>
      <Routes>
        <Route exact path='/day1' element={<Day1 />} />
        <Route exact path='/day2' element={<Day2 />} />
        {/* <Route exact path='/' element={<Home />} /> 
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/thanks' element={<Thanks />} /> */}
      </Routes>
    </main>

    <footer className='App-footer'>
     Coded by <a className='App-link' href='https://www.linkedin.com/in/hanavoriskova/?locale=en_US'>Hana Voriskova</a> for coding practice
    </footer>
    </BrowserRouter>
  );
}

export default App;
