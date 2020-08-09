import React, {Component} from 'react'
import axios from 'axios'
import './home.css'

class Home extends Component{
    state = {
        movie: []
    }

    constructor(){
        super()       
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                console.log(res.data)
                this.setState({movie: res.data})
            })
        
    }

    render() {
        return(
            <>
            <body>
                <div className='content'>
                    <h1>Daftar Film-Film Terbaik</h1>
                    {this.state.movie.sort().map(movie => 
                        <>
                        <h2 key={movie.id}>{movie.title}</h2>
                        <h3>Rating {movie.rating}</h3>
                        <h3>Duration: {movie.duration/60}jam</h3>
                        <h3>Genre: {movie.genre}</h3>
                        <p><strong>Deskripsi: </strong>{movie.description}</p>
                        
                        </>)}
                </div>
            </body>
            <footer>
                <h5>copyright &copy; 2020 by Sanbercode</h5>
            </footer>
            
            </>
        )
    }

}


export default Home