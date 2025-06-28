import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import W from './pages/W'
import Header from './components/header/Header'
import InfiniteProvider from './context/InfiniteProvider'



function App() {
  const queryClient = new QueryClient()
  return (
    <InfiniteProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/w/:id' element={<W />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </InfiniteProvider>
  )
}

export default App