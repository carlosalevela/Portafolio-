import NavbarMobile from './sections/NavbarMobile';
import Background from './sections/Background';
import Header from './sections/Header';
import About from './sections/About';
import Logo from '../assets/images/Logo.png';




function App() {
  return (
    <div className='dark:text-gray-200 dark:bg-slate-900'>
      <Header />
      <NavbarMobile />
      <main className="main-content">
        <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <p className="intro-text">
          Hola, me llamo Carlos Alegría y soy estudiante de ingeniería de software de quinto semestre. Me intereso por aprender cada vez más sobre mi carrera con constancia y disciplina, siendo así quiero dejar este pequeño portafolio donde encontrarás un poco de mí y mis proyectos.
        </p>
      </main>
      <Background />
      <About />


    </div>
  )
}

export default App;
