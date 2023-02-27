
import { Box , Button , styled}  from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
const LeftContainer = styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
      padding:'20px 40px'
    }
  }));

const Image = styled('img')({
    width:"95%",
   padding:'15px'
})

const StyleButton=styled(Button)(({theme})=>({
    width:'48%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
      width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'48'
    }
  }));


const ActionItems = ({ product }) => {
  return (
    <LeftContainer>
        <Box style={{ padding: '15px 20px ',border: '1px solid #f0f0f0'}}>
        <Image src={product.detailUrl} alt=""/>
        </Box>
        <StyleButton variant="contained" style={{marginRight:10,background:'#ff9f00'}}><ShoppingCartIcon />Add to Cart</StyleButton>
        <StyleButton variant="contained" style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</StyleButton>
    </LeftContainer>
  )
}

export default ActionItems
