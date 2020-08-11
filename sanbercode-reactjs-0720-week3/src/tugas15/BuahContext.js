import React, { useState, createContext } from 'react'

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataHargaBuah, setDataBuah] = useState({
        lists: null,
        selectedId: 0,
        statusForm: 'create'
        });

    return (
        <BuahContext.Provider value={[dataHargaBuah, setDataBuah]}>
            {props.children}
        </BuahContext.Provider>
    );
};