import { createContext, useState } from "react";

export const MainContext = createContext();

const Context = ({children}) => {

    const [userName, setUserName]  = useState('');
    const [userEmail, setUserEmail] = useState('');

    const contextValue = {

        userName,
        setUserName,
        userEmail,
        setUserEmail
    }

    return (
     
    <>

        <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>

    </>
    )
}

export default Context