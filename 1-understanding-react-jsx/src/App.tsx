
import './App.css'

function Welcomemsg() {
  const [count, setCount] = useState(0);
  return <div>
    <h1>Welcome to React </h1>
    <button onClick={()=>setCount(count +1)} >Add an apple</button>

  </div>
  

}

function App() {
  

  return (
    <>
    <div> 
      <button >Watch Now</button> </div>
    
    </>
   
   
  )
}

export default App
