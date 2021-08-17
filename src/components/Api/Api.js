import React, { useEffect, useState } from 'react';
import './Api.css';
import { getList } from '../ApiFetch/ApiFetch';
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
      <h2>Electronics</h2>
      <ul>
        {list.map(item => <li key={item.id}><b><i>{item.name}</i></b>
          <li><img src={item.image} alt={item.name} /></li>
          <li><b>${item.price}.</b></li>
          <li><p>{item.description}</p></li></li>)}
      </ul>
    </div>

  )
}
export default App;