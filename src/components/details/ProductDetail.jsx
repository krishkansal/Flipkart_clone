import { Box ,Typography,styled,Table , TableBody , TableRow,TableCell} from "@mui/material";

import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
  vertical-align:baseline;
  & > p {
    font-size:14px;
    margin-top:10px;

  }
`;

const StyledBadge = styled(Badge)`
  margin-right:10px;
  color: #00CC00;
  font-size:15px;
`

const ColumnText = styled(TableRow)`
  font size:14px;
  vertical-align:baseline;
  & > td{
    font size:14px;
    margin-top:10px;
    border:none;
  }
`


const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date=new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
    <>
    <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
              8 Rating and & 1 Review
            <Box component="span"><img src={fassured} style={{width:77 , marginLeft:20}} alt=""/></Box>
            </Typography>

            <Typography>
              <Box component="span" style={{fontSize:28}} >₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{color:'#878787'}} ><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{color:'#388E3C'}} >{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
            </Typography>

            <Typography>Available offers</Typography>
            <SmallText>
              <Typography> <StyledBadge />10% Off up to ₹1250 on ICICI Credit /EMI transaction.T&C</Typography>
              <Typography> <StyledBadge />10% instant discount on PNB Credit Card, up to ₹1500, on orders of ₹5,000 and aboveT&C</Typography>
              <Typography> <StyledBadge />5% Cashback on Flipkart Axis Bank CardT&C</Typography>
              <Typography> <StyledBadge />Get extra ₹100 off (price inclusive of cashback/coupon)T&C</Typography>
              <Typography> <StyledBadge />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</Typography>
              <Typography> <StyledBadge />Purchase now & get a surprise cashback coupon till November 2023Know More</Typography>
            </SmallText>
            <Table>
              <TableBody>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                  <TableCell style={{ fontWeight:600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                  <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Seller</TableCell>
                  <TableCell>
                    <Box component="span" style={{color:'#3874f0'}} > SuperComNet </Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>7 Days Replacement Policy</Typography>
                  </TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell colSpan={2}>
                    <img src={adURL} alt="flipkartcoins" style={{width:390}} />
                  </TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </ColumnText>
              </TableBody>
            </Table>
      
    </>
  )
}

export default ProductDetail
