import NavbarMobile from './sections/NavbarMobile';
import Background from './sections/Background';
import Header from './sections/Header';
import About from './sections/About';
import Me from './sections/Me';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

function App() {
  return (
    <div className='dark:text-blue-200 dark:bg-slate-900'>
      <Header />
      <Background />
      <NavbarMobile />
      <Me />
      <About />
      <Projects />
      <Skills />
      <Footer />

    </div>
  )
}

export default App;
