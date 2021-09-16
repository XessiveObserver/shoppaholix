import React, { useEffect, useState } from 'react';

import { getList } from '../ApiFetch/ApiFetch';
import { StyledWrapper, StyledUnOrderedList, AddCartButton } from './ApiStyles';


export const Api = () => {

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
      <br />
      <p>
        <StyledUnOrderedList>
          {list.map(item => <li key={item.id}><b>{item.name}</b>
            <li><b>${item.price}.</b></li>
            <li><img src={item.image} alt={item.name} /></li>
            <AddCartButton>Add To Cart</AddCartButton>
          </li>
          )}
        </StyledUnOrderedList>
      </p>
      <br />
    </StyledWrapper>


  )
}
