import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import StorySubmissionPage from './pages/StorySubmissionPage'
// import StoryModal from './pages/StoryModal'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App page-container">
        <Header />

        <div className='content-wrap'>
          <Routes>
            <Route path="/" exact element={<HomePage />}/>
            <Route path="/create" exact element={<StorySubmissionPage />}/>
            <Route path="/story/:id" element={<HomePage />} />
          </Routes>

        </div>
        
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
