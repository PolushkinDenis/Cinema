interface ICountries {
    country: string
}
interface IGenres {
    genre: string
}

export interface IFilm {
    kinopoiskId: number,
    imdbId: string,
    nameRu: string,
    nameEn: string | null,
    nameOriginal: string,
    countries: ICountries[]
    genres: IGenres[]
    ratingKinopoisk: number,
    ratingImdb: number,
    year: number,
    type: string,
    posterUrl: string,
    posterUrlPreview: string
}

export interface IFilms {
    items: IFilm[],
    total: number,
    totalPages: number
   
}



// export interface INamesFilm {
//     _id: string,
//     name: string
// }

// export interface IFilm {
//     externalId: {
//         _id: string,
//         imdb: string
//     },
//     logo: {
//         _id: string,
//         url: null
//     },
//     poster: {
//         _id: string,
//         url: string,
//         previewUrl: string
//     },
//     rating: {
//         _id: string,
//         kp: number,
//         imdb: number,
//         filmCritics: number,
//         russianFilmCritics: number,
//         await: number
//     },
//     votes: {
//         _id: string,
//         kp: number,
//         imdb: number,
//         filmCritics: number,
//         russianFilmCritics: number,
//         await: number
//     },
//     movieLength: number,
//     id: number,
//     type: string,
//     name: string,
//     description: string,
//     year: number,
//     alternativeName: string,
//     enName: null,
//     names: INamesFilm[],
//     shortDescription: null
// }

// export interface IFilms {
//     docs: IFilm[]
// }

// export interface IFilms {
//     docs: [
//         {
//             externalId: {
//                 _id: string,
//                 imdb: string
//             },
//             logo: {
//                 _id: string,
//                 url: null
//             },
//             poster: {
//                 _id: string,
//                 url: string,
//                 previewUrl: string
//             },
//             rating: {
//                 _id: string,
//                 kp: number,
//                 imdb: number,
//                 filmCritics: number,
//                 russianFilmCritics: number,
//                 await: number
//             },
//             votes: {
//                 _id: string,
//                 kp: number,
//                 imdb: number,
//                 filmCritics: number,
//                 russianFilmCritics: number,
//                 await: number
//             },
//             movieLength: number,
//             id: number,
//             type: string,
//             name: string,
//             description: string,
//             year: number,
//             alternativeName: string,
//             enName: null,
//             names: [
//                 {
//                     _id: string,
//                     name: string
//                 },
//             ],
//             shortDescription: null
//         }
//     ]
//     limit: number,
//     page: number,
//     pages: number,
//     total: number,
// }