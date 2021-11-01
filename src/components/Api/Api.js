import React, { useEffect, useState } from 'react';

import { getList } from '../ApiFetch/ApiFetch';
import { StyledWrapper, StyledUnOrderedList, AddCartButton } from './ApiStyles';
import { AddShoppingCart } from '@material-ui/icons'
import { connect } from 'react-redux';

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
            <AddCartButton>
            <AddShoppingCart /> Add To Cart
            </AddCartButton>
          </li>
          )}
        </StyledUnOrderedList>
      </p>
      <br />
    </StyledWrapper>


  )
}

const getStateForProps = (state) => ({
  collections: state.product.productsCollection
})

export default connect(getStateForProps)(Api);