import React, {useState, useContext, useEffect} from 'react'
import {BuahContext} from './BuahContext'
import axios from 'axios'

const BuahAction = () =>{
    const [dataHargaBuah, setDataBuah, input, setInput] = useContext(BuahContext)
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm] = useState('create')

    useEffect( () => {
        if (dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                console.log(res.data)
              setDataBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight}} ))
            })     

        }
    }, [dataHargaBuah]
    )


    const handleEdit = (event) => {
        let idBuah = parseInt(event.target.value)
        let buah = dataHargaBuah.find(x => x.id === idBuah)
        setInput({name: buah.name, price: buah.price, weight: buah.weight})
        setSelectedId(idBuah)
        setStatusForm('edit')
    }

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        let newDataHargaBuah = dataHargaBuah.filter(el => el.id != idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            console.log(res)
        })

        setDataBuah([...newDataHargaBuah])
    }

    

    return(
        <>

            <button onClick={handleEdit} value={input.index}>Edit</button>
            &nbsp;
            <button onClick={handleDelete} value={input.index}>Delete</button>

        </>
    )

};

export default BuahAction