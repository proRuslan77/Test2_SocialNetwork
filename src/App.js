
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
        <BrowserRouter>
            <div className='App-wrapper'>

                <Header/>

                <Nav/>

                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Dialogs" element= {<Dialogs/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
  )
}

export default App;
