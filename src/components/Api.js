import React, { useEffect, useState } from 'react';
import '../App.css';
import { getList } from './apiFetch';
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}
        <li>{item.price}</li>
        <li><img src={item.image} alt={item.name} /></li>
        <li>{item.description}</li></li>)}
      </ul>
    </div>

)
}
export default App;