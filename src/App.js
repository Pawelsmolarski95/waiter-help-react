
import AddTableForm from './components/features/AddTableForm/AddTableForm';
import EditTableInfo from './components/features/EditTableInfo/EditTableInfo';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { fetchStatus } from './redux/statusReducer';
import { fetchData } from './redux/tableReducer';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData()), [dispatch] );
  useEffect(() => dispatch(fetchStatus()), [dispatch] );
  
  const test = useSelector(state => state.tables)

  console.log(test)
  
  return (
    <main>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tables/:tableId' element={<EditTableInfo/>} />
          <Route path='/tables/add' element={<AddTableForm/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>      
      </Container>
    </main>
    
  );
}

export default App;
