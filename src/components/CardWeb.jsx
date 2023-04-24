import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardWeb () {
    return(
        <>
        <Container maxWidth="md" sx={{ pb: 2, mt:2}}>
            <Card>
                <CardActionArea>

                <CardMedia 
                    component="img"
                    image="https://via.placeholder.com/1000x200"
                    alt="Una descripcion"
                    />
                <CardContent>
                    <Typography variant="h5" component="h3">Card Title</Typography>
                    <Typography cariant="body2" component="p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus perspiciatis, dolorem vel nostrum ullam illum nisi quod molestias optio ut esse commodi explicabo recusandae distinctio, repudiandae eius doloribus, voluptates magnam.
                    </Typography>

                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="success" variant="contained">Add</Button>
                    <Button color="error">Remove</Button>
                </CardActions>
            </Card>
        </Container>
        </>
    )
}