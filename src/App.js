
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';

function App() {
  return (
    <main>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tables/:tableId" element={<EditTableInfo/>} />
          <Route path="/tables/add" element={<AddTableForm/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>      
      </Container>
    </main>
    
  );
}

export default App;
