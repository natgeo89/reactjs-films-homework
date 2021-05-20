export interface movieInfoResponseStubI {
  'backdrop_path': string;
  title: string;
  genres: Array<{ id: number; name: string }>;
  runtime: number;
  'vote_average': number;
  overview: string;
  movieKey: string;
}

export const movieInfoResponseStub: movieInfoResponseStubI = {
  backdrop_path: 'https://image.tmdb.org/t/p/w1280/tB2w4m0rW62MTufTjRj0gFLMVBP.jpg',
  title: 'The Jungle Book',
  genres: [
    { id: 10751, name: 'Family' },
    { id: 12, name: 'Adventure' },
    { id: 18, name: 'Drama' },
    { id: 14, name: 'Fantasy' },
  ],
  runtime: 106,
  vote_average: 6.9,
  overview:
    `A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan,
    Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery
    with the help of the panther, Bagheera and the free-spirited bear, Baloo.`,
  movieKey: 'TKRr_f85shA',
};
