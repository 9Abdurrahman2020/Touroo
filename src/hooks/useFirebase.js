import initializeAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()

const useFirebase = () =>{
    const [user,setUser] = useState(null);
    const [error,setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [location,setLocation] = useState({});
    const [history, setHistory] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const redirect_uri = location?.state?.from || '/';
    const loginWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then( result => {
            setUser(result.user);
            history.push(redirect_uri)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
                setIsLoading(false)
            }else{
                setUser(null)
                setIsLoading(false)
            }
        })
    },[])

    const logOut = () =>{
        signOut(auth)
        .then( ()=>{
            setUser(null)
        })
    }

    return {
        user,
        loginWithGoogle,
        isLoading,
        logOut,
        setLocation,
        setHistory,
        error
    }
}
export default useFirebase;