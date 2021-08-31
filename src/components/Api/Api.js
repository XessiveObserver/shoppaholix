import React, { useEffect, useState } from 'react';

import { getList } from '../ApiFetch/ApiFetch';
import {StyledWrapper, StyledUnOrderedList} from './ApiStyles';


export default function Api() {

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
    <StyledWrapper>
      <h2>Electronics</h2>
      <p>
        <StyledUnOrderedList>
          {list.map(item => <li key={item.id}><b><i>{item.name}</i></b>
            <li><img src={item.image} alt={item.name} /></li>
            <li><b>${item.price}.</b></li>
            <li><p>{item.description}</p></li></li>)}
        </StyledUnOrderedList>
      </p>
    </StyledWrapper>
    

  )
}
