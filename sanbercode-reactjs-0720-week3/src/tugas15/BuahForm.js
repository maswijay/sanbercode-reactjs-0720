import React, {useState, useContext, useEffect} from 'react'
import {BuahContext} from './BuahContext'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto'

const BuahForm = () =>{
    const [dataHargaBuah, setDataBuah] = useContext(BuahContext)
    const [input, setInput] = useState({name: '', price: '', weight: 0})
        

    useEffect( () => {
        if (dataHargaBuah.statusForm === 'changeToEdit') {
            let dataBuah = dataHargaBuah.lists.find(x => x.id === dataHargaBuah.selectedId)
            setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight})
            setDataBuah({...dataHargaBuah, statusForm: 'edit'})
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
            if (dataHargaBuah.statusForm === 'create'){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
                .then(res => {
                    setDataBuah(
                        {statusForm: 'create', selectedId: 0,
                        lists: [...dataHargaBuah.lists, {id: res.data.id, name: input.name, price: input.price, weight: input.weight}]})
                })
            }else if(dataHargaBuah.statusForm === 'edit'){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${dataHargaBuah.selectedId}`, {name: input.name, price: input.price, weight: input.weight})
                .then(() => {
                    let dataBuah = dataHargaBuah.lists.find(el=> el.id === dataHargaBuah.selectedId)
                    dataBuah.name = input.name
                    dataBuah.price = input.price
                    dataBuah.weight = input.weight
                    
                    setDataBuah({statusForm: 'create', selectedId:0, lists: [...dataHargaBuah.lists]})
                })
            }
            setInput({name: '', price: '', weight: 0})
        }
    }

    return(
        <>
        <Container maxWidth='sm' component={Paper}>
            <Typography variant='h4' gutterBottom>Form Tambah dan Edit</Typography>
            <TextField
            id='standard-full-width'
            label='Nama Buah'
            fullWidth
            margin='normal'
            variant='outlined' 
            value={input.name || ''} 
            onChange={handleChange} 
            />
            <TextField
            id='standard-full-width'
            label='Harga Buah'
            fullWidth
            margin='normal'
            variant='outlined' 
            value={input.price || ''} 
            onChange={handleChange} 
            />
            <TextField
            id='standard-full-width'
            label='Berat Buah (dalam gram)'
            fullWidth
            margin='normal'
            variant='outlined' 
            value={input.name || ''} 
            onChange={handleChange} 
            />
            <Button variant='contained' type='submit'>Submit</Button>
        </Container>
        {/* <h1 style= {{textAlign:'center'}}>Form Tambah dan Edit</h1>
                
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
                            <input style={{float: 'right'}} type='number' name='weight' value={input.weight || ''} onChange={handleChange} />
                        <br/>
                        <br/>
                        <div style={{width: '100%', paddingBottom: '20px'}}>
                            <button style={{float: 'right'}}>submit</button>
                        </div>
                        </form>
                    </div>
                </div> */}
    </>
    )

};

export default BuahForm