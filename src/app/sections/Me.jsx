import Logo from './../../assets/images/Logo.png';

const Me = () => {
  return (
    <section
      id='home'
      className='min-h-screen container mx-auto flex flex-col items-center justify-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='w-full pt-20 flex flex-col md:flex-row items-center justify-between max-w-6xl'>
        <div className='lg:col-span-2 sm:pl-2 md:w-1/2 text-center md:text-left'>
          <div>
            <h5 className='font-medium text-gray-600 dark:text-gray-200'>
              ¡Hola, bienvenido!
            </h5>
            <h1 className='sm:text-5xl text-4xl dark:text-white font-medium leading-normal'>
              Soy <span className='text-primary'>Carlos Velasco</span> <br />
              Ingeniero de Software
            </h1>
            <button className='font-semibold dark:text-gray-200 border-b-2 border-gray-700 mt-4'>
              <i className='fa-solid fa-up-right-from-square'></i> Ver Portafolio
            </button>
          </div>
          <div className='md:w-96 md:ml-auto flex mt-9 gap-2 dark:text-gray-300'>
            <i className='fa-solid fa-border-all mt-0.5 md:inline-block hidden'></i>
            <p className='text-xs text-balance leading-5 max-w-md px-2 mx-auto md:mx-0'>
              Hola, me llamo Carlos Alegria y soy estudiante de ingeniería de software de quinto semestre. Me intereso por aprender cada vez más sobre mi carrera con constancia y disciplina. Siendo así, quiero dejar este pequeño portafolio donde encontrarás un poco de mí y mis proyectos.
            </p>
          </div>
          <div className='flex items-center justify-center md:justify-start dark:text-gray-200 text-gray-600 gap-6 mt-9'>
            <a href='#' className='social-icon'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fa-brands fa-facebook'></i>
            </a>
          </div>
        </div>
        <div className='lg:col-span-2 md:w-1/2 flex items-center justify-center'>
          <img
            src={Logo}
            className='w-2/3 md:w-full max-w-xs md:mt-0 mt-5'
            alt='Logo'
          />
        </div>
      </div>
    </section>
  );
};

export default Me;
