import React, {useState, useContext, useEffect} from 'react'
import {MovieContext} from './MovieContext'
import axios from 'axios'

const MovieAction = () =>{
    const [movieList, setMovieList, input, setInput] = useContext(MovieContext)
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm] = useState('create')

    useEffect( ()=> {
        if (movieList === null){
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                console.log(res.data)
                setMovieList(res.data.map(el=>{
                    return {
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating
                    }
                }))
            })
        }
    }, [movieList]
    )

    const handleEdit = (event) => {
        let idMovie = parseInt(event.target.value)
        let movie = movieList.find(x => x.id === idMovie)
        setInput({
            title: movie.title,
            description: movie.description,
            year: movie.year,
            duration: movie.duration,
            genre: movie.genre,
            rating: movie.rating
        })
        setSelectedId(idMovie)
        setStatusForm('edit')
    }

    const handleDelete = (event) => {
        let idMovie = parseInt(event.target.value)
        let newMovieList = movieList.filter(el => el.id != idMovie)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
        .then(res => {
            console.log(res)
        })
        setMovieList([...newMovieList])
    }

    return(
        <>
        <button onClick={handleEdit} value={input.index}>Edit</button>
        &nbsp;
        <button onClick={handleDelete} value={input.index}>Delete</button>
        </>
    )

    
}