import React, { ReactNode, createContext } from 'react'




const RegisterFormContext = createContext(undefined);
const RegisterFormContextProvider = ({children} : {children: ReactNode}) => {
        
    const value = undefined;
    return (
    <RegisterFormContext.Provider value={value}>RegisterFormContext</RegisterFormContext.Provider>
  )
}

export default RegisterFormContext