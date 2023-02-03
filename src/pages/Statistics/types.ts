export type moviesStatistics = {
  movies: number;
  views: number;
  viewsPerMonth: {
    month: string;
    views: number;
  }[];
};
