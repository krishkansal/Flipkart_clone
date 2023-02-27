import React from 'react'
import { useState ,useContext } from 'react';

import {Box,Button, Typography,styled} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';

import {DataContext} from '../../context/DataProvider';
import Profile from './Profile';
//components
import LoginDialog from '../login/LoginDialog';


const Wrapper=styled(Box)(({ theme }) => ({
    display:'flex',
    margin:'0 3% 0 auto',
    '&> *': {
    marginRight:40,
    fontSize:15,
    alignItem:'center',

    },
    [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const Container=styled(Box)(({ theme }) => ({
    display:'flex',
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
       

       <Container>
            <ShoppingCart/>
            <Typography>Cart</Typography>
       </Container>
       <LoginDialog open={open} setopen={setopen} />
    </Wrapper>
  )
}

export default CustomButtons
