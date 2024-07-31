import React from "react";
import UserContext from "./UserContext";

const UserContextProvider= ({bacche})=>{
    const[user,setUser] = React.useState(null)
    return(
        <>
        <UserContext.Provider value={{user ,setUser}}>
            {bacche}
        </UserContext.Provider>
        </>
    )
}
export default UserContextProvider();