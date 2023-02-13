import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
     <Nav />

      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Netflix Orginals" 
           fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" 
           fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" 
           fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" 
           fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic Movies" 
           fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" 
           fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horor Movies" 
           fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" 
           fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
