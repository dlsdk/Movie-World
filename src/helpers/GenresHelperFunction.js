const getGenresNameById = (genres,movieGenderIds) => {
    return genres.filter(genre => movieGenderIds.includes(genre.id)).map(genre => genre.name);
}

export default getGenresNameById;