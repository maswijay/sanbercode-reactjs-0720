import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListBuah14 = () => {

    const [dataHargaBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({
        name: '',
        price: '',
        weight: 0
        })
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

    const handleSubmit = (event) => {
        event.preventDefault()

        let name = input.name
        let price = input.price.toString()

        if (name.replace(/\s/g,'') !== '' && price.replace(/\s/g,'') !== ''){
            if (statusForm === 'create'){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
                .then(res => {
                    setDataBuah([...dataHargaBuah, {id: res.data.id, name: input.name, price: input.price, weight: input.weight}])
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

    return (
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
                    
                    <tbody style= {{backgroundColor: '#FF7F50'}}>
                        {
                            dataHargaBuah != null && dataHargaBuah.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td style= {{textAlign:'center'}}>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight/1000} Kg</td>
                                    <td style={{textAlign: 'center'}}>
                                        <button onClick={handleEdit} value={item.id}>Edit</button>
                                        &nbsp;
                                        <button onClick={handleDelete} value={item.id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* Form Input */}
                <h1 style= {{textAlign:'center'}}>Form Tambah dan Edit</h1>
                
                <div style={{width: '100%', margin: '0 auto', marginTop: '10px', display: 'block'}}>
                    <div style={{border: '1px solid grey', padding: '20px'}}>
                        <form onSubmit={handleSubmit}>
                            <label style={{float: 'left'}}>Nama buah:</label>
                            <input style={{float: 'right'}} type='text' name='name' value={input.name} onChange={handleChange} />
                        <br/>
                        <br/>
                            <label style={{float: 'left'}}>Harga buah:</label>
                            <input style={{float: 'right'}} type='text' name='price' value={input.price} onChange={handleChange} />
                        <br/>
                        <br/>
                            <label style={{float: 'left'}}>Berat buah (dalam gram):</label>
                            <input style={{float: 'right'}} type='text' name='weight' value={input.weight} onChange={handleChange} />
                        <br/>
                        <br/>
                        <div style={{width: '100%', paddingBottom: '20px'}}>
                            <button style={{float: 'right'}}>submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
}


export default ListBuah14