import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchBar from './components/SearchBar.jsx';
import Cards from './components/Cards.jsx';
import food from './assets/img/food.jpg';
import { SearchProvider } from './contexts/SearchContext.jsx';
import CardDetails from './components/CardDetails.jsx';
import ChiSiamo from './components/ChiSiamo.jsx';
import Contatti from './components/Contatti.jsx';
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <SearchProvider>
        <NavBar />
        
        <div className='flex flex-col min-h-screen'>
        <Routes>
          <Route path="/" element={
            
            <div className=' relative flex flex-col items-center justify-center p-4 mt-16 flex-grow'>
              <h1 className='font-bold text-3xl mb-4 mt-6 font-nunito text-custom'>Find your perfect vegetarian recipe!</h1>
              <div className='inline-block relative mb-4 w-full md:w-1/2'>
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/2">
                  <SearchBar />
                </div>
                <img src={food} alt="vegetarian food" className="rounded-lg mt-10" />
              </div>
              <Cards />
            </div>
          } />
          <Route path="/recipe/:id" element={<CardDetails />} />
        
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
        </div>
        <Footer/>

      </SearchProvider>
    </Router>
  );
}

export default App;
