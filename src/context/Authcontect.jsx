import { createContext, useEffect, useState } from "react";

export let Auth=createContext()


function AuthcontextProvider({children}) {

const [userIsLogged, setuserIsLogged] = useState(false)

useEffect(() => {

    if (localStorage.getItem('token')) {
setuserIsLogged(true)
}else{
setuserIsLogged(false)

}
}, [])



return <Auth.Provider value={{userIsLogged, setuserIsLogged}}>

{children}

</Auth.Provider>

}
export default AuthcontextProvider