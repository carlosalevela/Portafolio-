import Alegre from './../../assets/images/Alegre.png';
import Face from './../../assets/images/brand-facebook.png';
import Inst from './../../assets/images/brand-instagram.png';
import Git from './../../assets/images/brand-github.png';

const About = () => {
  return (
    <section id='about' className='container min-h-screen flex flex-col items-center bg-purple-landing py-10'>
      <div className='text-center text-black'>
        <h3 className='text-3xl font-bold'>Un poco Sobre Mi</h3>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between w-full mt-10 px-6'>
        <div className='text-center md:text-left text-black md:w-1/2'>
          <p className='px-2 mt-3'>
            Un poco sobre mi y mis aficiones, me encanta conocer nuevas cosas, nuevos lugares siempre acompañado de mis seres queridos amigos o familia. Otro gusto el cual sigo desde pequeño es los carros y motos me gusta mucho verlos correr y además sumergirme un poco en lo que es los arreglos mecánicos y modificaciones que se pueden realizar.
          </p>
        </div>
        <div className='flex flex-col items-center md:w-1/2 mt-6 md:mt-0'>
          <img src={Alegre} alt='Perfil' className='w-32 h-32 rounded-full mb-4' /> {/* Foto de perfil */}
          <h3 className='text-xl font-bold text-white mb-2'>Me encuentras en</h3>
          <div className='flex'>
            {/* Logos de redes sociales */}
            <a href='https://github.com/carlosalevela' target='_blank' rel='noopener noreferrer'>
              <img src={Git} alt='GitHub' className='w-8 h-8 mr-4' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100081108318320' target='_blank' rel='noopener noreferrer'>
              <img src={Face} alt='Facebook' className='w-8 h-8 mr-4' />
            </a>
            <a href='https://www.instagram.com/carlos_velasco_19/' target='_blank' rel='noopener noreferrer'>
              <img src={Inst} alt='Instagram' className='w-8 h-8' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
