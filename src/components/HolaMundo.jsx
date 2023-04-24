import { Button, Typography, Container } from "@mui/material"
export default function HolaMundo() {
    return(
        <>
        <Container maxWidth="md" sx={{border: 3, boxShadow: 3, pb: 2, mt:2}}>

            <h1>Hola Mundo</h1>
            <Typography variant="h6" component="h2">
                App con Tipography
            </Typography>
            <Button
                sx={{mr: 2}} 
                variant="contained" 
                color="error">
                Eliminar
            </Button>
            <Button variant="contained" color="success">Enviar</Button>
        </Container>
        </>
    )
}