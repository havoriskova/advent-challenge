import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
import Year2021Day1 from './year2021/Day1.js';
import Year2021Day2 from './year2021/Day2.js';
import Year2022Day1 from './year2022/Day1.js';
import Year2022Day2 from './year2022/Day2.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>
          Hi, this is my 'advent of code' challenge
        </h1>
        <h2>
          You can find each challenge below:
        </h2>
        <ul className='App-list App-main-list'>
          <li><span>Challenges from 2021:</span>
            <ul className='App-list'>
              <li className='App-list-item'><NavLink to='/2021/day1' className='App-link'>day 1</NavLink></li>
              <li className='App-list-item'><NavLink to='/2021/day2' className='App-link'>day 2</NavLink></li>
            </ul>
          </li>
          <li><span>Challenges from 2022:</span>
            <ul className='App-list'>
              <li className='App-list-item'><NavLink to='/2022/day1' className='App-link'>day 1</NavLink></li>
              <li className='App-list-item'><NavLink to='/2022/day2' className='App-link'>day 2</NavLink></li>
            </ul>
          </li>
        </ul>
      </header>
    </div>

    <main className='App-main'>
      <Routes>
        {/* 2021 */}
        <Route exact path='/2021/day1' element={<Year2021Day1 />} />
        <Route exact path='/2021/day2' element={<Year2021Day2 />} />
        

        {/* 2022 */}
        <Route exact path='/2022/day1' element={<Year2022Day1 />} />
        <Route exact path='/2022/day2' element={<Year2022Day2 />} />
      </Routes>
    </main>

    <footer className='App-footer'>
     Coded by <a className='App-link' href='https://www.linkedin.com/in/hanavoriskova/?locale=en_US' target='_blank' rel='noreferrer'>Hana Voriskova</a> for coding practice | 2023
    </footer>
    </BrowserRouter>
  );
}

export default App;
