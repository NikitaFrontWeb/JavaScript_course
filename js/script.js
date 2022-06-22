"use strict";

// 1
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// 2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

// 3
let lastMovie = prompt('Один из послдених просмотренных фильмов?', '');
let lastMovieRate = prompt('Насколько оцените его?', '');
personalMovieDB.movies['lastMovie'];