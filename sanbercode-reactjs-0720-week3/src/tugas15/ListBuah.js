import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import {BuahContext} from './BuahContext'

const ListBuah = () => {
    const [dataHargaBuah, setDataBuah] = useContext(BuahContext)

    useEffect( () => {
        if (dataHargaBuah.lists === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataBuah({...dataHargaBuah, lists: res.data.map(el=>{ return{id: el.id, name: el.name, price: el.price, weight: el.weight}})})
            })
        }
    }, [setDataBuah]
    )

    const handleEdit = (event) => {
        let idBuah = parseInt(event.target.value)

        setDataBuah({...dataHargaBuah, selectedId: idBuah, statusForm: 'changeToEdit'})
    }

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        let newDataHargaBuah = dataHargaBuah.lists.filter(el => el.id !== idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            console.log(res)
        })

        setDataBuah({...dataHargaBuah, lists: [...newDataHargaBuah]})
    }

    return(
        <>
        <div style={{width: '40%', margin: '0 auto', marginTop: '20px'}}>
            <h1 style= {{textAlign:'center'}}>Tabel Harga Buah</h1>
            <table style={{width: '100%', border: '1px solid black'}}>
                <thead>
                    <tr style={{backgroundColor: '#AAAAAA'}}>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataHargaBuah.lists !== null && dataHargaBuah.lists.map((id, index) => {
                            return(
                                <tr key={index}>
                                    <td style= {{textAlign:'center'}}>{index+1}</td>
                                    <td>{id.name}</td>
                                    <td>{id.price}</td>
                                    <td>{id.weight/1000} Kg</td>
                                    <td>
                                        <button onClick={handleEdit} value={id.index}>Edit</button>
                                        &nbsp;
                                        <button onClick={handleDelete} value={id.index}>Delete</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
        
    </>)
};

export default ListBuah