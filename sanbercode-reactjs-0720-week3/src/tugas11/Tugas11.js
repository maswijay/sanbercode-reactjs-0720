import React from 'react'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

const renderTabelData = () =>
{
    return dataHargaBuah.map((dataHargaBuah) => {
        const {nama, harga, berat} = dataHargaBuah
        return (
        <tr>
            <td>{nama}</td>
            <td>{harga}</td>
            <td>{berat/1000}kg</td>
        </tr>
    )})  
}


class Tugas11 extends React.Component {
    render() {
        return (
            <div style= {{width: '40%', margin: '0 auto', marginTop: '20px'}}>
                    <h1 style= {{textAlign: 'center'}}>Tabel Harga Buah</h1>
                    <div>
                        <table id='buah' style = {{width: '100%', border: '1px solid black'}}>
                            <tr style={{backgroundColor: '#AAAAAA'}}>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Berat</th>
                            </tr>
                            <tbody style= {{backgroundColor: '#FF7F50'}}>
                                {renderTabelData()}
                            </tbody>
                        </table>
                    </div>                
                </div>
        )               
    }
}

export default Tugas11;

