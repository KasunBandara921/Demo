
import './App.css'

function Welcomemsg({name}) {
  const apiok = "Mov";
  return <h1>Welcome to React {name} </h1>
}

function App() {
  

  return (
    <>
    <div> <Welcomemsg name="John"/> </div>
    <div> <Welcomemsg/> </div>
    </>
   
   
  )
}

export default App
