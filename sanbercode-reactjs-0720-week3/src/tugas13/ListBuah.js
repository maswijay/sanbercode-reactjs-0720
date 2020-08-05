import React, {Component} from 'react'

class ListBuah extends Component{

    constructor(props){
        super(props)
        this.state = {
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],

            input: {
                nama: '',
                harga: '',
                berat: ''
            },

            indexOfForm: -1
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
            let input = {...this.state.input}
            input[event.target.name] = event.target.value
            this.setState({input});
        }

    handleEdit(event){
        let index = event.target.value
        let buah = this.state.dataHargaBuah[index]
        this.setState({
            input: {
                nama: buah.nama,
                harga: buah.harga,
                berat: buah.berat
            },
            indexOfForm: index
        });
    }
    

    handleSubmit(event){
        // menahan submit
        event.preventDefault()

        let input = this.state.input

        if (input['nama'].replace(/\s/g,'') !== "" && input['harga'].toString().replace(/\s/g,'') !== '' && input['berat'].toString().replace(/\s/g,'') !== ''){      
            let newDataHargaBuah = this.state.dataHargaBuah
            let index = this.state.indexOfForm
            
            if (index === -1){
            newDataHargaBuah = [...newDataHargaBuah, input]
            }else{
            newDataHargaBuah[index] = input
            }
        
            this.setState({
            dataHargaBuah: newDataHargaBuah,
            input: ""
            })
        }

    }


    handleDelete(event){
        let index = event.target.value
        let newDataHargaBuah = this.state.dataHargaBuah
        let editedDataHargaBuah = newDataHargaBuah[this.state.indexOfForm]
        newDataHargaBuah.splice(index, 1)
    
        if (editedDataHargaBuah !== undefined){
          // array findIndex baru ada di ES6
          var newIndex = newDataHargaBuah.findIndex((el) => el === editedDataHargaBuah)
          this.setState({DataHargaBuahLomba: newDataHargaBuah, indexOfForm: newIndex})
          
        }else{
          
          this.setState({DataHargaBuahLomba: newDataHargaBuah})
        }
        
      }



    render() {
        return (
            <>
            <div style={{width: '40%', margin: '0 auto', marginTop: '20px'}}>
                <h1 style= {{textAlign:'center'}}>Tabel Harga Buah</h1>
                <table style={{width: '100%', border: '1px solid black'}}>
                    <tr style={{backgroundColor: '#AAAAAA'}}>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>                    
                    </tr>
                    <tbody style= {{backgroundColor: '#FF7F50'}}>
                        {this.state.dataHargaBuah.map((val, index) => {
                            return(
                                <tr key={index}>
                                    <td tyle= {{textAlign:'center'}}>{index+1}</td>
                                    <td>{val.nama}</td>
                                    <td>{val.harga}</td>
                                    <td>{val.berat/1000}kg</td>
                                    <td style={{textAlign: 'center'}}>
                                        <button onClick={this.handleEdit} value={index}>Edit</button>
                                        &nbsp;
                                        <button onClick={this.handleDelete} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* Form Input */}
                <h1 style= {{textAlign:'center'}}>Form Tambah dan Edit</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Masukan nama: </label>
                    <input type="text" name= 'nama' value={this.state.input.nama} onChange={this.handleChange} placeholder='Nama Buah' />
                    &nbsp;
                    <button>submit</button>   
                </form>
                <form onSubmit={this.handleSubmit}>
                    <label>Masukan harga: </label>
                    <input type="text"  name= 'harga' value={this.state.input.harga} onChange={this.handleChange} placeholder='Harga Buah' />
                    &nbsp;
                    <button>submit</button>
                </form>                    
                <form onSubmit={this.handleSubmit}>
                    <label>Masukan berat: </label>
                    <input type="text"  name= 'berat' value={this.state.input.berat} onChange={this.handleChange} placeholder='Berat Buah dalam gram' />
                    &nbsp;
                    <button>submit</button>
                </form>  
                
            </div>
            </>
        )
    }

}

export default ListBuah