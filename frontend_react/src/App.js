import React, { createContext, useState } from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
        <div className="app" id={theme}>
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                {/* <Testimonial /> */}
                <Footer />
            </div>
        </div>
           
        </ThemeContext.Provider>


    )
}

export default App;