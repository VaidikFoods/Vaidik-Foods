import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickAction from './components/QuickAction';
import { parseData } from './utils/parseData';

function App() {
  const [data, setData] = useState({ company: {}, products: [] });

  useEffect(() => {
    const loadData = async () => {
      try {
        const parsed = await parseData();
        if (parsed) {
          setData(parsed);
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="App selection:bg-primary/10 selection:text-primary min-h-screen flex flex-col">
      <Header company={data.company} />
      <main className="flex-grow">
        <Hero company={data.company} />
        <About company={data.company} />
        <Products products={data.products} company={data.company} />
        <Contact company={data.company} />
      </main>
      <Features />
      <Footer company={data.company} />
      <QuickAction company={data.company} />
    </div>
  );
}

export default App;
