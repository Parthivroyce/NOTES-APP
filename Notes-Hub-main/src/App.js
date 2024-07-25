import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Create from './pages/Create';
import { deepPurple } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Layout from './components/Layout';

const theme = createTheme({
  palette:{
    primary: deepPurple
  },
  typography:{
    // fontFamily: 'Mooli'
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Notes/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
