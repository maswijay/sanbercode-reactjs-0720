import React, {useState, useContext, useEffect} from 'react'
import {BuahContext} from './BuahContext'
import axios from 'axios'

const BuahForm = () =>{
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

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        
        switch (typeOfInput){
            case 'name':{
                setInput({...input, name: event.target.value});
                break
            }
            case 'price':{
                setInput({...input, price: event.target.value});
                break
            }
            case 'weight':{
                setInput({...input, weight: event.target.value});
                break
            }
        default:{
            break;
        }
        }
    }

    
    
    const handleSubmit = (event) => {
        event.preventDefault()

        let name = input.name
        let price = input.price.toString()

        if (name.replace(/\s/g,'') !== '' && price.replace(/\s/g,'') !== ''){
            if (statusForm === 'create'){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
                .then(res => {
                    setInput([...dataHargaBuah, {id: res.data.id, name: input.name, price: input.price, weight: input.weight}])
                })
            }else if(statusForm === 'edit'){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name: input.name, price: input.price, weight: input.weight})
                .then(() => {
                    let dataBuah = dataHargaBuah.find(el=> el.id === selectedId)
                    dataBuah.name = input.name
                    dataBuah.price = input.price
                    dataBuah.weight = input.weight
                    
                    setDataBuah([...dataHargaBuah])
                })
            }

            setStatusForm('create')
            setSelectedId(0)
            setInput({name: '', price: '', weight: 0})
        }
    }

    return(
        <>
        <h1 style= {{textAlign:'center'}}>Form Tambah dan Edit</h1>
                
                <div style={{width: '40%', margin: '0 auto', marginTop: '10px', display: 'block'}}>
                    <div style={{border: '1px solid grey', padding: '20px'}}>
                        <form onSubmit={handleSubmit}>
                            <label style={{float: 'left'}}>Nama buah:</label>
                            <input style={{float: 'right'}} type='text' name='name' value={input.name || ''} onChange={handleChange} />
                        <br/>
                        <br/>
                            <label style={{float: 'left'}}>Harga buah:</label>
                            <input style={{float: 'right'}} type='text' name='price' value={input.price || ''} onChange={handleChange} />
                        <br/>
                        <br/>
                            <label style={{float: 'left'}}>Berat buah (dalam gram):</label>
                            <input style={{float: 'right'}} type='text' name='weight' value={input.weight || ''} onChange={handleChange} />
                        <br/>
                        <br/>
                        <div style={{width: '100%', paddingBottom: '20px'}}>
                            <button style={{float: 'right'}}>submit</button>
                        </div>
                        </form>
                    </div>
                </div>
    </>
    )

};

export default BuahForm