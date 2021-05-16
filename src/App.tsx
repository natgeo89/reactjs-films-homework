import React from 'react';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Header from './components/Header';

import { movieInfoResponseStub } from './stubs/stubs';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <MovieDetailsPage movieInfo={movieInfoResponseStub} />
      <div style={{ fontSize: '50px' }}>MovieCardList</div>
    </main>
  </>
);

export default App;
