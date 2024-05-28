import NavbarMobile from './sections/NavbarMobile';
import Background from './sections/Background';
import Header from './sections/Header';
import About from './sections/About';
import Me from './sections/Me';

function App() {
  return (
    <div className='dark:text-gray-200 dark:bg-slate-900'>

      <Header />
      <Background />
      <NavbarMobile />
      <Me />
      <About />


    </div>
  )
}

export default App;
