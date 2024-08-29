'use client'
import { createContext, useState } from "react";


const AppContext = createContext()
function AppProvider({ children }) {
    const [products, setProducts] = useState(null)
    const [business, setBusiness] = useState(
)
    const [origins, setOrigins] = useState([
     
    ]);
    const [formUp, SetForm] = useState(false)
    const [popUp, SetPopup] = useState(false)
    const [userId, setUserId] = useState({})
    const [message, setMessage] = useState({})
    let sharedState = {/* whatever you want */ }
    const value = {
      formUp, SetForm,business, setBusiness, sharedState,products, setProducts, userId, setUserId, message, setMessage,popUp, SetPopup,
    };
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  }
  
  export { AppContext, AppProvider };