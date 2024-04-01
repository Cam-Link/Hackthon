import React, {useState, createContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/Routing';
import Header from './Pages/Header';
import Footer from './Pages/Footer';



export const ThemeContext = createContext()

function App() {

  const[theme, setThemes] = useState('light')

  const toggleTheme = ()=> {
    setThemes(theme === 'dark' ? 'light' : 'dark'  )
  }

  return (
    <BrowserRouter>

    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
      <div className='app flex flex-col justify-between h-[] ' id={theme}>
        <Header />
            <Routing />
        <Footer />

      </div>
    </ThemeContext.Provider >
    </BrowserRouter>
  );
}

export default App;
