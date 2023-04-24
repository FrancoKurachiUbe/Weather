//import { Button, Container, Grid, Typography } from "@mui/material";
//import { Box, TextField, Typography } from "@mui/material";
import Product from "./components/Product";
import CardWeb from "./components/CardWeb";
import HolaMundo from "./components/HolaMundo";
import NavBar from "./components/Nadbar/NavBar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Route, Routes } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from '@mui/lab/LoadingButton';
import  Box from "@mui/material/Box";
import { useState } from "react";
//import { LoadingButton } from "@mui/lab";

//console.log(import.meta.env.VITE_API_KEY);
const API_KEY = import.meta.env.VITE_API_KEY

const API_WEATHER =`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`
console.log(API_WEATHER);

export default function app() {
  const [city, setCity] = useState("")
  const[loading, setLoading] = useState(false)
  const [error, setError] = useState({
    error:false,
    message:"",
  })
  
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async(e) => {
    e.preventDefault();
    //console.log("submit")
    setLoading(true)
    setError({
      error:false,
      message: error.message,
    })
    try {
      if(!city.trim()) throw {message:"El campo ciudad es obligatorio"}

      const response = await fetch(`${API_WEATHER}${city}`)
      const data = await response.json();
      if(data.error) throw {message: data.error.message}
      console.log(data)
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      setError({
        error:true,
        message: error.message,
      })
    } finally{
      setLoading(false)
    }
  }

  return(
      <Container 
      maxWidth="xs"
      sx={{mt:2}}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          >
          App Weather
        </Typography>
        <Box
          sx={{display: "grid", gap: 2}}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="city"
            label="Ciudad"
            variant="outlined"
            size="small"
            required
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Cargando"
          >
              Buscar
          </LoadingButton>
        </Box>

        {weather.city && (
          <Box
            sx={{
              mt: 2,
              display: "grid",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
            >
              {weather.city}, {weather.country}
            </Typography>
            <Box
              component="img"
              alt={weather.conditionText}
              src={weather.icon}
              sx={{ margin: "0 auto" }}
            />
            <Typography
              variant="h5"
              component="h3"
            >
              {weather.temperature} °C
            </Typography>
            <Typography
              variant="h6"
              component="h4"
            >
              {weather.conditionText}
            </Typography>
          </Box>
        )}

        <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>
      </Container>
    
  );
}