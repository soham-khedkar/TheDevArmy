import './App.css';
import {useState} from 'react'

function App() {
  // const items = ['REACT', 'JS', 'HTML', 'CSS', 'SVELTE']
  const [items, setItems] = useState(['REACT', 'JS', 'HTML', 'CSS', 'SVELTE'])
  const [value, setValue] = useState('')


  function onAdd ()  {
    console.log(items)
    const newItems = [...items, value];
    // items.push(value)
    setItems(newItems);
    setValue('')
   
  }
  function onvalueChange  (e) {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return <div className='app'>
    <header className= 'App-header'>
      <h1>TODO list</h1>
      <input type ='text' placeholder= "Enter todo item" onChange={onvalueChange}/>
      <button onClick={onAdd}> Add your item</button>
      <ol>
       {items.map((item, index) => ( <li key={index}>{item}</li>
       ))}
      </ol>
    
    </header>
  </div>
}

export default App;
