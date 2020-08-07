import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListBuah = () => {

    const [dataHargaBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({
        name: '',
        price: '',
        weight: ''
        })
    const [selectedId, setSelectedId] = useState('0')
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
        setInput(event.target.value)
    }

    const handleEdit = (event) => {
        let idBuah = parseInt(event.target.value)
        let buah = dataHargaBuah.find(x => x.id === idBuah)
        setInput(buah.name)
        setSelectedId(idBuah)
        setStatusForm('edit')
    }

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        let newDataHargaBuah = dataHargaBuah.filter(el => el.id !== idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits${idBuah}`)
        .then(res => {
            console.log(res)
        })

        setDataBuah = ([...newDataHargaBuah])
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let buah = input

        if (buah.replace(/\s/g,'') !== ''){
            if (statusForm === 'create'){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits/`, {buah})
                .then(res => {
                    setDataBuah([...dataHargaBuah, {id: res.id, name: res.name, price: res.price, weight: res.weight}])
                })
            }else if(statusForm === 'edit'){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {buah})
                .then(res => {
                    let dataBuah = dataHargaBuah.find(el=> el.id ===selectedId)
                    dataBuah.name = res.data.name
                    dataBuah.price = res.data.price
                    dataBuah.weight = res.data.weight
                    
                    setDataBuah([...dataHargaBuah])
                })
            }

            setStatusForm('create')
            setSelectedId(0)
            setInput('')
        }
    }

    return (
            <>
            <div style={{width: '40%', margin: '0 auto', marginTop: '20px'}}>
                <h1 style= {{textAlign:'center'}}>Tabel Harga Buah</h1>
                <table style={{width: '100%', border: '1px solid black'}}>
                    <tbody>
                        <tr style={{backgroundColor: '#AAAAAA'}}>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>                    
                        </tr>
                    </tbody>
                    
                    <tbody style= {{backgroundColor: '#FF7F50'}}>
                        {
                            dataHargaBuah != null && dataHargaBuah.map((id, index) => {
                            return(
                                <tr key={index}>
                                    <td style= {{textAlign:'center'}}>{index+1}</td>
                                    <td>{id.name}</td>
                                    <td>{id.price}</td>
                                    <td>{id.weight/1000}kg</td>
                                    <td style={{textAlign: 'center'}}>
                                        <button onClick={handleEdit} value={id}>Edit</button>
                                        &nbsp;
                                        <button onClick={handleDelete} value={id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* Form Input */}
                <h1 style= {{textAlign:'center'}}>Form Tambah dan Edit</h1>
                
                <form onSubmit={handleSubmit}>
                    <label>Nama Buah: </label>
                    <input type="text" name= 'nama'  onChange={handleChange} />  
                </form>
                <form onSubmit={handleSubmit}>
                    <label>Harga Buah: </label>
                    <input type="text"  name= 'harga'  onChange={handleChange} />
                </form>                    
                <form onSubmit={handleSubmit}>
                    <label>Berat Buah dalam gram: </label>
                    <input type="text"  name= 'berat'  onChange={handleChange} />                  
                </form>  
                <button>submit</button>
            </div>
            </>
        )
}


export default ListBuah