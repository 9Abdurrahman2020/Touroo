import { useContext } from "react"
import { authProvider } from "../context/ContextProvider/ContextProvider"

const useAuth = () =>{
    return useContext(authProvider);
}
export default useAuth;