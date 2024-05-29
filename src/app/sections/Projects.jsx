import { useState } from 'react';
import py1 from './../../assets/images/ropa.png';
import py2 from './../../assets/images/restaurante.png';
import py3 from './../../assets/images/inventario.png';
import py4 from './../../assets/images/cajaseguridad.png';
import py5 from './../../assets/images/pelis.png';

const projects = [
  { id: 1, image: py1, title: 'Consentida BTQ', subtitle: 'Consentida Accesorios', description: 'Un proyecto realizado con HTML, JavaScript, Vite y React creado para suministrar una página web a un local de ropa y joyería ubicado aquí en Pasto en la 27 para que así las personas conozcan y disfruten de lo que contiene este local.' },
  { id: 2, image: py2, title: '2RParrilla', subtitle: 'Restaurante 2RParrilla', description: 'Proyecto realizado con HTML, JavaScript, Vite y React usado para visualizar los platos del restaurante y además la ubicación del mismo.' },
  { id: 3, image: py3, title: 'Minorista', subtitle: 'Inventario Tienda', description: 'Un proyecto realizado en Java para controlar los inventarios, ventas, promociones y clientes de la tienda.' },
  { id: 4, image: py4, title: 'Caja Seguridad', subtitle: 'Caja de Seguridad', description: 'Proyecto realizado con backend y frontend con Django y Angular para el control de datos personales como correo, tarjetas, identificaciones y secretos.' },
  { id: 5, image: py5, title: 'El4Cine', subtitle: 'Streaming Free', description: 'Proyecto realizado con backend y frontend con Django y Angular para la visualización de películas y series de manera gratuita.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCard = () => {
    setSelectedProject(null);
  };

  return (
    <section id='projects' className='container min-h-screen flex flex-col items-center bg-purple-landing py-10'>
      <div className='text-center text-white'>
        <h3 className='text-3xl font-bold'>Mis Proyectos</h3>
        <p className='px-2 mt-3 max-w-4xl mx-auto'>
          En el recorrido de la carrera he aprendido a usar varios programas de edición de código y de creación, de los cuales han salido estos proyectos.
        </p>

        <div className='grid mx-auto md:grid-cols-3 gap-6 max-w-4xl mt-10'>
          {projects.map((project) => (
            <div key={project.id} className='group'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover border-4 dark:border-white rounded-md cursor-pointer group-hover:grayscale transition duration-1000'
                onClick={() => handleImageClick(project)}
              />
              <p className='text-white text-center mt-2'>{project.subtitle}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 relative max-w-sm w-full'>
              <button
                className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-auto rounded-md' />
              <h4 className='mt-4 text-2xl font-bold text-black'>{selectedProject.title}</h4>
              <p className='mt-2 text-gray-700'>{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
