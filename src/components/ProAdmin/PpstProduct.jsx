import React from "react";
import TextField from '@mui/material/TextField';

const Product=()=>{
    return(
        <>
        <div className="product-container">
            <h1>Product Controller</h1>
        <form action="">
                        <TextField id="outlined-basic" label="productName" variant="outlined" name="productName"/>
                        <TextField id="outlined-basic" label="productTitle" variant="outlined" name="productTitle"/>
                        <TextField id="outlined-basic" label="productDescription" variant="outlined" name="productDescription"/>
                        <TextField id="outlined-basic" label="productCategory" variant="outlined" name="productCategory"/>
                        <TextField id="outlined-basic" label="productPrice" variant="outlined" name="productPrice"/>
                        <TextField id="outlined-basic" label="productDiscount" variant="outlined" name="productDiscount"/>
                        <button type="submit">Post</button>
                        </form>
        </div>
        </>
    )
}
export default Product