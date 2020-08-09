import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movieList, setMovieList] = useState(null)
    const [input, setInput] = useState([{
        title: '',
        description: '',
        year: '',
        duration: '',
        genre: '',
        rating: 1
    }]);

    return (
        <MovieContext.Provider value={[movieList, setMovieList, input, setInput]}>
            {props.children}
        </MovieContext.Provider>

    )
}