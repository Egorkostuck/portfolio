import React from 'react';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    const mainStyle = {
        minHeight: '1500px'
    }
    return (
        <div className="App">
            <div className="wrapper">
                <Header />

                <main style={mainStyle}>
                    <Home/>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default App;
