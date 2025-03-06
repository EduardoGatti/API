import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';  
import './App.css';  
import PaginaAnuncios from './pages/PaginaAnuncios/PaginaAnuncios';  
import PaginaPrincipal from './pages/PaginaPrincipal/PaginaPrincipal';  
import PaginaLivros from './pages/PaginaLivros/PaginaLivros';
import PaginaUsers from './pages/PaginaUsers/PaginaUsers';

function Layout() {  
  return (  
    <>   
      <Outlet /> {}  
    </>  
  );  
}  

function App() {  
  const router = createBrowserRouter([  
    {  
      path: '/',  
      element: <Layout />,  
      children: [  
        {  
          path: '/anuncios',  
          element: <PaginaAnuncios />,  
        },  
        {  
          path: '/',  
          element: <PaginaPrincipal />,  
        },  
        {  
          path: '/livros',  
          element: <PaginaLivros />,  
        },  
        {  
          path: '/users',  
          element: <PaginaUsers />,  
        },  
      ],  
    },  
  ]);  

  return <RouterProvider router={router} />;  
}  

export default App;  