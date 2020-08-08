import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component{

    constructor(props){
        super(props)       
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                console.log(res.data)
            })
        
    }

}

export default Home