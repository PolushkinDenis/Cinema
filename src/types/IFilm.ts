export interface IFilm {
  kinopoiskId: number,
  imdbId: string,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string,
  logoUrl: string,
  reviewsCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingImdb: number,
  ratingImdbVoteCount: number,
  ratingFilmCritics: number,
  ratingFilmCriticsVoteCount: number,
  ratingAwait: number,
  ratingAwaitCount: number,
  ratingRfCritics: number,
  ratingRfCriticsVoteCount: number,
  webUrl: string,
  year: number,
  filmLength: number,
  slogan: string,
  description: string,
  shortDescription: string,
  editorAnnotation: string,
  isTicketsAvailable: boolean,
  productionStatus: string,
  type: string,
  ratingMpaa: string,
  ratingAgeLimits: string,
  hasImax: boolean,
  has3D: boolean,
  lastSync: string,
  countries: [
    {
      country: string
    }
  ],
  genres: [
    {
      genre: string
    }
  ],
  startYear: number,
  endYear: number,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean

}


// export interface IFilm {
//         id: number,
//         externalId: {
//           tmdb: number,
//           imdb: string
//         },
//         type: string,
//         name: string,
//         description: string,
//         slogan: string,
//         year: number,
//         poster: {
//           url: string,
//           previewUrl: string
//         },
//         backdrop: {
//           url: string,
//           previewUrl: string
//         },
//         rating: {
//           tmdb: number,
//           kp: number,
//           imdb: number
//         },
//         votes: {
//           tmdb: number,
//           kp: number,
//           imdb: number
//         },
//         videos: {
//           trailers: [
//             {
//               _id: string,
//               url: string,
//               name: string,
//               site: string,
//               size: number,
//               type: string
//             }
//           ],
//           teasers: []
//         },
//         budget: {
//           value: number,
//           currency: string
//         },
//         fees: {
//           world: {
//             value: number,
//             currency: string
//           },
//           russia: {
//             value: number,
//             currency: string
//           },
//           usa: {
//             value: number,
//             currency: string
//           }
//         },
//         distributors: {
//           distributor: string,
//           distributorRelease: string
//         },
//         premiere: {
//           country: string,
//           world: string,
//           russia: string,
//           bluray: string,
//           dvd: string
//         },
//         images: {
//           postersCount: number,
//           backdropsCount: number,
//           framesCount: number
//         },
//         status: string,
//         movieLength: number,
//         productionCompanies: [
//           {
//             name: string,
//             url: string,
//             previewUrl: string
//           }
//         ],
//         spokenLanguages: [
//           {
//             name: string,
//             nameEn: string
//           }
//         ],
//         facts: [
//           {
//             value: string
//           },
        
//         ],
//         genres: [
//           {
//             name: string
//           }
//         ],
//         countries: [
//           {
//             name: string
//           }
//         ],
//         seasonsInfo: [],
//         persons: [
//           {
//             id: number,
//             name: string,
//             enName: string,
//             photo: string,
//             enProfession: string
//           },
            
//         ],
//         lists: []
//       }