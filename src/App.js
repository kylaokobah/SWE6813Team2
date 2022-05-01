import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LoginPage from './pages/LoginPage.js';
import LandingPage from './pages/LandingPage.js';
import RegisterPage from './pages/RegisterPage.js';
import OnboardingModal from './pages/Onboarding/OnboardingModal'
import Main from './components/Nav/Main.js'
// Components
import NavBar from "./components/Nav/NavBar.js";
import NavBarHome from "./components/Nav/NavBarHome.js";
import NavBarRegister from "./components/Nav/NavBarRegister.js";
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={
              <>
              <NavBarHome />
              <LandingPage />
              </>
              } />
              <Route path='/login' element={
              <>
              <NavBar/>
              <LoginPage />
               </>
               } />
              <Route path='/register'element={
              <>
              <NavBarRegister/>
              <RegisterPage/>
              </>
              }/>
              <Route path="/onboarding/:userId/*" element={<OnboardingModal />} />
              <Route path='/*' element={<Main />} />
        </Routes>
          </BrowserRouter>
  );
}

export default App;
