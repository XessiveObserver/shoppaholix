import React, { useEffect, useState, useReducer } from 'react';
import { RemoveCircleOutline, AddCircleOutline } from '@material-ui/icons'

import { getList } from '../ApiFetch/ApiFetch';
import {
  StyledWrapper,
  StyledUnOrderedList,
  AddButton,
  ShoppingCart,
  CartTotal,
  RemoveButton
} from './ProductsStyles';

// rounding currency to 2 decimal values
const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}


export const Products = () => {
  // Product
  const [list, setList] = useState([]);


  // using useReducing to sum up cart products
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'addProduct':
        return [...state, action.product];
      case 'removeProduct':
        const productIndex = state.findIndex(item => item.name === action.product.name);
      if(productIndex < 0) {
        return state;
      }
        const update = [...state];
        update.splice(productIndex, 1);
        return update;
      default:
        return state;
    }
  }

  // Cart 
  const [cart, setCart] = useReducer(cartReducer, []);
 
  //convert currency to local
  const getTotal = (cart) => {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
  }


  // adding product price to cart
  const addProduct = product => {
    setCart({ product, type: 'addProduct' });
  }

  // adding product price to cart
  const removeProduct = product => {
    setCart({ product, type: 'removeProduct' });
  }


  useEffect(() => {
    let mounted = true;
    getList()
      .then(products => {
        if (mounted) {
          setList(products)
        }
      })
    return () => mounted = false;
  }, [])


  return (
    <StyledWrapper>
      <ShoppingCart>
        Cart Items: {cart.length} products.
      </ShoppingCart>
      <CartTotal>
        Cart Total: {getTotal(cart)}
      </CartTotal>

      <p>
        <StyledUnOrderedList>
          {list.map(product => <li key={product.id}><b>{product.name}</b>
            <li><b>${product.price}.</b></li>
            <li><img src={product.image} alt={product.name} /></li>
            <div>
              <AddButton>
                <AddCircleOutline style={{fontSize: 30}}  onClick={() => addProduct(product)} />
              </AddButton>
              <RemoveButton>
                <RemoveCircleOutline style={{fontSize: 30}}  onClick={() => removeProduct(product)} />
              </RemoveButton>
              
              </div>
          </li>
          )}
        </StyledUnOrderedList>
      </p>
      <br />
    </StyledWrapper>


  )
}



