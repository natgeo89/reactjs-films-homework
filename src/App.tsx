import React from 'react';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Header from './components/Header';

import { movieInfoResponseStub } from './stubs/stubs';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <MovieDetailsPage movieInfo={movieInfoResponseStub} />
      <div style={{ fontSize: '50px' }}>
        MovieCardList:
        <ul>
          {Array.from(Array(10), (elem, index) => (
            <li>{index}</li>
          ))}
        </ul>
      </div>
    </main>
  </>
);

export default App;
