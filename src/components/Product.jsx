import { Box, Button, ButtonBase, Container, Grid, Paper, Typography, styled } from "@mui/material";

export default function Product() {
    const Img = styled("img")({
        width:"200",
        height:"100%",
        objectFit:"cover",
        objectPosition:"center"
    })
    return(
        <>
        <Container maxWidth="md" sx={{ pb: 2, mt:2}}>
            <Paper
                sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:2,
                    overflow:"hidden",
                    mt:5,
                }}
                >
                <Img src="https://via.placeholder.com/200" alt="Imagen"/>
                <Box sx={{flexGrow: 1, display:"grid", gap:3}}>
                    <Typography variant="h4">Product Name</Typography>
                    <Typography variant="body1">Product Descripcion</Typography>
                    <Button variant="contained">add to Card</Button>
                </Box>
                <Box sx={{mr: 2}} component="p">
                    $4.99
                </Box>
            </Paper>
        </Container>
        </>
    )
}