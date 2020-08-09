import React from 'react'

const About = () =>{
    return(
        <body style={{width: '60%', margin: '60px auto'}}>
            <div style={{padding: '10px', backgroundColor: '#fff',border: '1px solid #ccc'}}>
                <h1 style={{textAlign: 'center'}}>Data Perserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li style={{display: 'block'}}><strong style={{width: '100px'}}>Nama:</strong> Dimas Wijayanto</li>
                    <li style={{display: 'block'}}><strong style={{width: '100px'}}>Email:</strong> martenzitic@gmail.com</li>
                    <li style={{display: 'block'}}><strong style={{width: '100px'}}>Sistem Operasi yang digunakan:</strong> Windows 10</li>
                    <li style={{display: 'block'}}><strong style={{width: '100px'}}>Akun Gitlab:</strong> https://github.com/maswijay</li>
                    <li style={{display: 'block'}}><strong style={{width: '100px'}}>Akun Telegram:</strong> https://t.me/dimaswijay</li>
                </ol>
            </div>
        </body>
    )
}

export default About