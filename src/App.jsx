import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About.tsx';
import Contact from './components/Contact';
import Home from './components/Home';
import { LoaderTwo } from "@/components/loader"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3 sec ke liye loader
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoaderTwo />;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

