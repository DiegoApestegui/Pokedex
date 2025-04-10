import React,{ useState,useContext} from "react";

export const DataContext = React.createContext();

const Data = {
    name: 'algo',
    url: 'algo',
}

export const DataProvider = ({ children }) => {
    
    const [region, setRegion] = useState(Data);

    return (
        <DataContext.Provider value={{ region, setRegion }}>
            {children}
        </DataContext.Provider>
    );
}