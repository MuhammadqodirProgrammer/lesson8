import { useContext } from "react"
import { Private } from "./apps/Private"
import { Public } from "./apps/Public"
import { AuthContext } from "./context/AuthContext"
import { GlobalStyle } from "./GlobalStyles"


function App() {
const {token} = useContext(AuthContext)

if(token){
  return <>
  <globalStyle />
     <Private />
  </>
}

return <>
<GlobalStyle />
<Public />

</>
  
  
}

export default App
