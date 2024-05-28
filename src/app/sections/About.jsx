import Alegre from '../../assets/images/Alegre.png';

const About = () => {
  return (
    <section id='about' className='container min-h-screen flex-center'>
      <div className=''>
        <div className='text-center text-balance'>
          <h3>Un poco sobre mí</h3>
          <p className='px-2 mt-3 text-gray-500'>
            Un poco sobre mí y mis aficiones. Me encanta conocer nuevas cosas y lugares, siempre acompañado de mis seres queridos, amigos o familia. Otro gusto que tengo desde pequeño son los carros y motos, me gusta mucho verlos correr y sumergirme en los arreglos mecánicos y modificaciones que se pueden realizar.
          </p>
        </div>
        <div className='max-w-2xl grid md:grid-cols-1 gap-6 px-2 sm:grid-cols-3 *:text-lg *:sm:max-w-full *:max-w-sm hover:*:brightness-90 *:mx-auto *:sm:text-left *:text-center *:hover:cursor-pointer *:shadow-sm mt-10 mx-auto *:rounded-xl *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12'>
          <div>
            <div className='*:text-primary'>
              <i className='fa-regular fa-object-ungroup'></i>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Diseño de Sitios Web
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
          <div>
            <div className='*:text-primary'>
              <i className='fa-solid fa-pen-nib'></i>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Diseño UI/UX
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
          <div>
            <div className='*:text-primary'>
              <i className='fa-solid fa-people-group'></i>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Trabajo en Equipo
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <h3 className='text-xl font-bold'>Me encuentras en</h3> {/* Título */}
      </div>
      <div className='flex justify-center mt-2'>
        {/* Logos de redes sociales */}
        <a href='https://github.com/tucuenta' target='_blank' rel='noopener noreferrer'>
          <img src='/path/to/github-logo.png' alt='GitHub' className='w-8 h-8 mr-4' />
        </a>
        <a href='https://facebook.com/tucuenta' target='_blank' rel='noopener noreferrer'>
          <img src='/path/to/facebook-logo.png' alt='Facebook' className='w-8 h-8 mr-4' />
        </a>
        <a href='https://instagram.com/tucuenta' target='_blank' rel='noopener noreferrer'>
          <img src='/path/to/instagram-logo.png' alt='Instagram' className='w-8 h-8 mr-4' />
        </a>
      </div>
      <div className='flex justify-center mt-6'>
        <img src={Alegre} alt='Perfil' className='w-32 h-32 rounded-full' /> {/* Foto de perfil */}
      </div>
    </section>
  );
};

export default About;
