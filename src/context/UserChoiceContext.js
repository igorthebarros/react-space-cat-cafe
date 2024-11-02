import React, {createContext, useState, useContext } from 'react'

const userChoiceContext = createContext()

export const UserChoiceProvider = ({ children }) => {
    
    const [choice, setChoice] = useState('default')

    return (
        <userChoiceContext.Provider value={{choice, setChoice}}>
            {children}
        </userChoiceContext.Provider>
    )
}

export const useUserChoice = () => useContext(userChoiceContext)