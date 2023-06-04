import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import ABPolloCliente from './componentes/ABApolloClient';
import CarrinhoProvider from './contextAPI/Carrinho';

const queryClient = new QueryClient()

function App() {
  return (
    <ABPolloCliente>
      <CarrinhoProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </QueryClientProvider>
      </CarrinhoProvider>
    </ABPolloCliente>

  );
}

export default App;
