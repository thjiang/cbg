import React from "react";

import "./App.scss";

// import Hello from "./Hello";
import Header from "./components/layout/header";
import Search from "./components/layout/search";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Hello name="TypeScript" enthusiasmLevel={3} />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
};

export default App;
