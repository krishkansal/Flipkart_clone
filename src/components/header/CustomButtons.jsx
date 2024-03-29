import React from 'react'
import { useState ,useContext } from 'react';

import {Box,Button, Typography,styled,Badge} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import {DataContext} from '../../context/DataProvider';
import Profile from './Profile';
//components
import LoginDialog from '../login/LoginDialog';



const Wrapper=styled(Box)(({ theme }) => ({
    display:'flex',
    margin:'0 3% 0 auto',
    '&> *': {
    marginRight:'40px !important',
    fontSize:14,
    alignItem:'center',

    },
    [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const Container=styled(Link)(({ theme }) => ({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const LoginButton=styled(Button)`
    color: #2874f0;;
    background: #fff;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`

const CustomButtons = () => {

  const [open,setopen]= useState(false);
  
  const {account,setAccount} =useContext(DataContext);


  const {cartItems} = useSelector(state=>state.cart);

  const openDialog=()=>{
    setopen(true);
  }

  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/> :
        <LoginButton variant='container' onClick={()=>openDialog()}>Login</LoginButton>
      }

       <Typography style={{ marginTop:3 , width:135 }}>Become a Seller</Typography>
       <Typography style={{ marginTop:3 }}>More</Typography>
       

       <Container to='/cart' >

                   {/* Badge for the cart icon length */}
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCart/>
          </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
       </Container>
       <LoginDialog open={open} setopen={setopen} />
    </Wrapper>
  )
}

export default CustomButtons
