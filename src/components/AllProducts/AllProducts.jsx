import { Container, Typography } from "@mui/material";
import React from "react";
import Products from "../Products/Products";

const AllProducts = () => {
    return(
        <div style={{marginTop:"75px"}}>
            <Container>
                <Typography variant="h1" align="center" gutterBottom>
                    Give the gift of happiness to your loved ones
                </Typography>
                <Products/>
            </Container>
        </div>
    )
}

export default AllProducts;