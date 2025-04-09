import React,{ useState,useContext} from "react";

export const DataContext = React.createContext();

const Data = {
    name: 'Kanto',
    url: 'algo',
}

export const DataProvider = ({ children }) => {
    
    const [data, setData] = useState(Data);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}