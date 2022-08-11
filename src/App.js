import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isSmallRow />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isSmallRow />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isSmallRow />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isSmallRow />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isSmallRow />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isSmallRow />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isSmallRow />
      </div>
    </>
  );
}

export default App;
