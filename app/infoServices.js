import {FaDog, FaCat, FaUserMd, FaRegHospital, FaTooth, FaSyringe} from 'react-icons/fa'

export const infoServices = [
    {
        title: 'Cirugías y Emergencias',
        description: 'Cuidado quirúrgico de calidad, incluso en situaciones críticas.',
        path: '/Services/#Surgeries_and_emergencies',
        icon: <FaRegHospital size={50} className='text-pink'/>
    },
    {
        title: 'Consulta General',
        description: 'Expertos en salud animal listos para escuchar y cuidar a tu mascota. ¡Siempre a tu lado en momentos de necesidad!',
        path: '/Services/#General_inquiry',
        icon: <FaUserMd size={50} className='text-pink'/>
    },
    {
        title: 'Baño Higienico',
        description: 'Mimos y limpieza para que tu mascota luzca y se sienta mejor que nunca. ¡Belleza y bienestar en uno solo!',
        path: '/Services/#Hygienic_bathroom',
        icon: <FaDog size={50} className='text-pink'/>
    },
    {
        title: 'Toma de Muestras',
        description: 'Precisión en cada detalle. Diagnósticos confiables para el bienestar de tu mascota.',
        path: '/Services/#Sampling',
        icon: <FaCat size={50} className='text-pink'/>
    },
    {
        title: 'Profilaxis Dental',
        description: 'Sonrisas saludables para mascotas felices. Cuida la salud bucal de tu compañero peludo con nosotros.',
        path: '/Services/#Dental_Prophylaxis',
        icon: <FaTooth size={50} className='text-pink'/>
    },
    {
        title: 'Plan de Vacunación',
        description: 'Protege a tu mascota de enfermedades con nuestro programa de vacunas a medida. Bienestar garantizado.',
        path: '/Services/#Vaccination_plan',
        icon: <FaSyringe size={50} className='text-pink'/>
    }
]