import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import NoPage from './components/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export function App() {
  const pageSize=15;
  return (
    <> <BrowserRouter>
      <Navbar title="NewsApp" />
      <Routes>
        <Route exact path="/" element={<News pageSize={pageSize} key="general" />} />
        <Route exact path="/business" element={<News pageSize={pageSize} key="business" Category={"business"} />} />
        <Route exact path="/entertainment" element={<News pageSize={pageSize} key="entertainment" Category={"entertainment"} />} />
        <Route exact path="/science" element={<News pageSize={pageSize} key="science" Category={"science"} />} />
        <Route exact path="/sports" element={<News pageSize={pageSize} key="sports" Category={"sports"} />} />
        <Route exact path="/technology" element={<News pageSize={pageSize} key="technology" Category={"technology"} />} />
        <Route exact path="/about" element={<News key="about" pageSize={pageSize} />} />
        <Route exact path="*" element={<NoPage key="noPage" />} />
      </Routes>
    </BrowserRouter>
    </>)

}

export default App