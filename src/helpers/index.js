import localStorageHelperFunctions from "./LocalStorageHelperFunctions";
import getGenresNameById from "./GenresHelperFunction";


const helperFunctions = {
   localStorageHelperFunctions, getGenresNameById
}

export default helperFunctions;

export  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmU2YTc5MzgyNTQ3YmY3YTI1MjFjYTNhNjhjNzA4NCIsInN1YiI6IjY0YzZhODA0ZWVjNWI1MDBlMjNjNWE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uwHsCpLdKf0Rwg0efdr58UWea7nbOLKTKnh4-uX5z6o'
    }
};
