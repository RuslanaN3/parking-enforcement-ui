import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardPage from "./pages/DashboardPage";
import EventsPage from "./pages/EventsPage";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<DashboardPage />}/>
                    <Route exact path="/events" element={<EventsPage />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
