import React from 'react';
import './App.css';
import Flights from './Components/Search/Flights';
import Home2 from './Components/Home2';
import Footer from './Components/Footer';
import SearchDivs from './Components/Search/SearchDivs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {FormDataProvider} from './Components/FormDataProvider';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home2 />} /> {/* Render Home2 component for the root path */}
          <Route path="/find-flights" element={<Flights />} />
        </Routes>
        <Footer />
      </div>

      {/* Place FormDataProvider inside the div */}
        <FormDataProvider>
          <SearchDivs />
          <Flights />
        </FormDataProvider>

    </Router>
  );
}

export default App;
