import React, { useState, createContext } from 'react'

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataHargaBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState([
        {name: '', price: '', weight: 0}
        ])
               
        ;

    return (
        <BuahContext.Provider value={[dataHargaBuah, setDataBuah, input, setInput]}>
            {props.children}
        </BuahContext.Provider>
    );
};