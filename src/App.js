// import logo from './logo.svg';
import React, { useState } from "react";
// import FunkStopWatch from "./components/FunkStopWatch";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import WindowSizes from './components/WindowSizes/index';
// import PageNotFound from './components/page/NotFound';
// import CalendarSection from './components/calendar/CalendarSection';
// import PageCounter from './components/page/PageCounter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./components/page/HomePages";
import {UserContext, ThemeContext} from "./context";
import CONSTANTS from './constants';
import UsersList from './components/training/UsersList';
const {THEMES} = CONSTANTS;

const App = () => {
  const themeStateArr = useState(THEMES.LIGHT);
  const [user] = useState({ id: 1, name: "Red" });
 
  // document.body.style.backgroundColor = theme === "lite" ? "pink" : "blue";
  // document.body.style.color = theme === "lite" ? "blue" : "pink"; //один из способов прописать стили
  return (
    <>
    <UsersList />
      {/* {" "}
      <ThemeContext.Provider value={themeStateArr}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePages />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider> */}
    </>
  );
};
export default App;

// const App = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const handlerVisible = () =>{
//     setIsVisible(!isVisible);
//   }
//   return (
//     <>
//     <button onClick={handlerVisible}>switch visible</button>
//     {isVisible && <FunkStopWatch/>}
//     </>
//   )
// };
// export default App;

// const App = () =>{
//   return(
//     <>
//       <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/About'>About</Link>
//           </li>
//           <li>
//             <Link to='/Contact'>Contact</Link>
//           </li>
//           <li>
//             <Link to='/winsize'>WindowSizes</Link>
//           </li>
//           <li>
//             <Link to='/PageCounter'>CounterSection</Link>
//           </li>
//         </ul>
//       </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/winsize" element={<WindowSizes />} />
//           <Route path="/*" element={<PageNotFound/>} />
//           <Route path="/PageCounter" element={<PageCounter/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// const Home = ()=><section>Home</section>;
// const About = ()=><section>About</section>;
// const Contact = ()=><section>Contact</section>;
// // const PageCounter = ()=><section>CounterSection</section>;

// export default App;

// function App (props){
//    return <>
//   <nnnn />
//   </>
//   }
//   export default App;

//  return React.createElement("h1",{className:'heading'},'hi');
//  return <h1 className='heading'>hi</h1>;
// return React.createElement (Ciao);

//  return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
