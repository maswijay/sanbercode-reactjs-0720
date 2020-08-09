import React, {useState, useEffect,Component, useContext} from 'react'
import axios from 'axios'
import {MovieContext} from './MovieContext'

const MovieListEditor = () => {
    const [movieList, setMovieList] = useState(null)
    const [movie, setInput] = useState({
        title: '',
        description: '',
        year: '',
        duration: '',
        genre: '',
        rating: 1
    })
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

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        
        switch (typeOfInput) {
            case 'title':{
                setInput({...movie, title: event.target.value});
                break
            }
            case 'description':{
                setInput({...movie, description: event.target.value});
                break
            }
            case 'year':{
                setInput({...movie, year: event.target.value});
                break
            }
            case 'duration':{
                setInput({...movie, duration: event.target.value});
                break
            }
            case 'genre':{
                setInput({...movie, genre: event.target.value});
                break
            }
            case 'rating':{
                setInput({...movie, rating: event.target.name});
                break
            }
        
            default:{
                break;}
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        let title = movie.title
        let year = movie.year.toString()
        let duration = movie.duration.toString()
        let description = movie.description
        let genre = movie.genre
        let rating= movie.rating.toString()

        if (title.replace(/\s/g,'') !== '' && year.replace(/\s/g,'') !== '' && duration.replace(/\s/g,'') !== '' && description.replace(/\s/g,'') !== '' && genre.replace(/\s/g,'') !== '' && rating.replace(/\s/g,'')){
            if (statusForm === 'create') {
                axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
                    title: movie.title,
                        description: movie.description,
                        year: movie.year,
                        duration: movie.duration,
                        genre: movie.genre,
                        rating: movie.rating})
                .then(res => {
                    setMovieList([...movieList, {
                        id: res.data.id,
                        title: movie.title,
                        description: movie.description,
                        year: movie.year,
                        duration: movie.duration,
                        genre: movie.genre,
                        rating: movie.rating}                    
                    ])
                })
            }else if(statusForm === 'edit'){
                axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`, {
                    title: movie.title,
                        description: movie.description,
                        year: movie.year,
                        duration: movie.duration,
                        genre: movie.genre,
                        rating: movie.rating})
                .then(() =>{
                    let dataMovie = movieList.find(el => el.id === selectedId)
                    dataMovie.title = movie.title
                    dataMovie.year = movie.year
                    dataMovie.description = movie.description
                    dataMovie.duration = movie.duration
                    dataMovie.genre = movie.genre
                    dataMovie.rating = movie.rating

                    setMovieList([...movieList])
                })
            }
        }
    }


    return(
        <>
        <div style={{width: '60%', margin: '0 auto', backgroundColor: '#fff', padding: '20px'}}>
            <h1>Movie List Editor</h1>
            <div>
                <form onSubmit= {handleSubmit} id='submitForm'>
                    <label style={{float: 'left'}}>Title: </label>
                    <input style={{float: 'right'}} type='text' name='title' value={movie.name} onChange={handleChange} />
                    <br/>
                    <br/>
                    <label style={{float: 'left'}}>Description: </label>
                    <textarea style={{float: 'right'}} type='text' name='desription' value={movie.description} onChange={handleChange} form='submitForm'>
                    </textarea>
                    <br/>
                    <br/>
                    <label style={{float: 'left'}}>Year: </label>
                    <input style={{float: 'right'}} type='number' name='year' value={movie.year} onChange={handleChange} />
                    <br/>
                    <br/>
                    <label style={{float: 'left'}}>Duration (in minutes): </label>
                    <input style={{float: 'right'}} type='number' name='duration' value={movie.duration} onChange={handleChange} />
                    <br/>
                    <br/>
                    <label style={{float: 'left'}}>Genre: </label>
                    <input style={{float: 'right'}} type='name' name='genre' value={movie.genre} onChange={handleChange} />
                    <br/>
                    <br/>
                    <label style={{float: 'left'}}>Rating (1-10): </label>
                    <input style={{float: 'right'}} type='number' name='rating' min='1' max='10' value={movie.rating} onChange={handleChange} />
                    <br/>
                    <br/>
                    <div style={{width: '100%', paddingBottom: '20px'}}>
                        <button style={{float:'right'}}>Submit</button>
                    </div>
            
                </form> 
            </div>
        </div>
        
        </>
    )
    
}

export default MovieListEditor