import { createContext, useState } from "react";

export const NavContext = createContext()

const NavProvider = ({children}) => {
    const [activeLinkeId, setActiveLinkId] = useState("");

    const providerValue = {
        activeLinkeId,
        setActiveLinkId
    }

    return (
       <NavContext.Provider value={providerValue}>
            {children}
       </NavContext.Provider>
    )
}

export default NavProvider