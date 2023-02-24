import Hero from "./components/Hero"
import Header from "./components/Header"
import Features from "./components/Features"
import Testimonial from "./components/Testimonial"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Workflow from "./components/Workflow"
import Technologies from "./components/Technologies"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material"

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Technologies />
        <AboutUs />
        <Testimonial />
        <ContactUs />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
