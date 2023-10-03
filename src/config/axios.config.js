import axios from "axios";

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjE0ODU0ZTJlYWQ0MzBlMzFiMjY5N2UxODViOTUyMyIsInN1YiI6IjY1MTFjOTYzYTkxMTdmMDExYjIxODBlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a_dsEGkMvhrclmz85zyhxN5CFe3iQcrpMx1B22D2chU';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.authorization = `Bearer ${apiKey}`;