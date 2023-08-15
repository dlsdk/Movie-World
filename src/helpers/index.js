const getUserWithUname = (users,uname) => {
   return users.find(user => user.uname === uname)
}
const getUserWithId = (users,id) => {
    return users.find(user => user.id === id)
 }

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const getAllLocalStorageValues = () => {
    return Object.values(localStorage).map(JSON.parse);
}

const setLocalstorage = (name,data) => {
    localStorage.setItem(
        name,
        JSON.stringify(data)
      );
}

const getGenresNameById = (genres,movieGenderIds) => {
    return genres.filter(genre => movieGenderIds.includes(genre.id)).map(genre => genre.name);
}

const updatedReviewList = (reviewList,myAddedReviews,id) => {
    const matchingReview = myAddedReviews.find(review => review.id === id);
    return matchingReview ? [...reviewList, matchingReview] : reviewList;
}

const helperFunctions = {
    getUserWithUname,getUserWithId,getFromLocalStorage, getAllLocalStorageValues, getGenresNameById,updatedReviewList,setLocalstorage
}

export default helperFunctions;

export  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmU2YTc5MzgyNTQ3YmY3YTI1MjFjYTNhNjhjNzA4NCIsInN1YiI6IjY0YzZhODA0ZWVjNWI1MDBlMjNjNWE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uwHsCpLdKf0Rwg0efdr58UWea7nbOLKTKnh4-uX5z6o'
    }
};
