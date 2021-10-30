import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const authProvider = createContext();

const ContextProvider = ({children}) => {
    
    const allContext = useFirebase();

    return (
        <authProvider.Provider value={allContext}>
            {children}
        </authProvider.Provider>
    );
};

export default ContextProvider;