import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import {BuahContext} from './BuahContext'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto'

const BuahList = () =>{
    const [dataHargaBuah, setDataBuah] = useContext(BuahContext)

    useEffect( () => {
        if (dataHargaBuah.lists === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
              setDataBuah({...dataHargaBuah, lists: res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight}} )})
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
        <Container maxWidth='sm'>
            
            
                <TableContainer component={Paper}  color='primary'>
                <Typography variant='h4' gutterBottom>Tabel Harga Buah</Typography>
                    <Table  color='primary'>
                    <TableHead  color='secondary'>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Nama</TableCell>
                            <TableCell align='right'>Harga</TableCell>
                            <TableCell align='right'>Berat</TableCell>
                            <TableCell align='center'>Aksi</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            dataHargaBuah.lists !== null && dataHargaBuah.lists.map((item, index) => {
                                return(
                                    <TableRow key={index}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell align='right'>{item.price}</TableCell>
                                        <TableCell align='right'>{item.weight/1000} Kg</TableCell>
                                        <TableCell align='center'>
                                            <ButtonGroup>
                                                <Button onClick={() => handleEdit(item.id)} value={item.id}>Edit</Button>
                                                <Button>Delete</Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
                </TableContainer>

        </Container>   
            
            {/* <div style={{width: '40%', margin: '0 auto', marginTop: '20px'}}>
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
                            dataHargaBuah.lists !== null && dataHargaBuah.lists.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td style= {{textAlign:'center'}}>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.weight/1000} Kg</td>
                                        <td>
                                            <button onClick={handleEdit} value={item.id}>Edit</button>
                                            &nbsp;
                                            <button onClick={handleDelete} value={item.id}>Delete</button>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div> */}
        
        
        
    </>)
};

export default BuahList