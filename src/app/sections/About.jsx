
import Alegre from '../../assets/images/Alegre.png';

const About = () => {
  return (
    <section className="px-6 py-8 flex flex-col items-center justify-center">
      <div className="flex items-center mb-6">
      </div>
      <div className="mb-6">
        <p className="text-lg">
          Un poco sobre mí y mis aficiones. Me encanta conocer nuevas cosas y lugares, siempre acompañado de mis seres queridos, amigos o familia. Otro gusto que tengo desde pequeño son los carros y motos, me gusta mucho verlos correr y sumergirme en los arreglos mecánicos y modificaciones que se pueden realizar.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold">Me encuentras en</h3> {/* Título */}
        <div className="flex items-center mt-2">
          {/* Logos de redes sociales */}
          <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/github-logo.png" alt="GitHub" className="w-8 h-8 mr-4" />
          </a>
          <a href="https://facebook.com/tucuenta" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-logo.png" alt="Facebook" className="w-8 h-8 mr-4" />
          </a>
          <a href="https://instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-logo.png" alt="Instagram" className="w-8 h-8 mr-4" />
          </a>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={Alegre} alt="Perfil" className="w-32 h-32 rounded-full" /> {/* Foto de perfil */}
      </div>
    </section>
  );
};

export default About;
