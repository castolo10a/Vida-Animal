'use client'

import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiCalendar, FiMapPin, FiHome, FiUsers, FiPackage, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Link from "next/link";
import Logo from "./logo";
import { FaCat, FaDog, FaRegHospital, FaSyringe, FaTooth, FaUserMd } from "react-icons/fa";

export default function NavBar() {
    const [oculto, setOculto] = useState(true);
    const [noActive, setNoActive] = useState(true);
    const [scrolling, setScrolling] = useState(false);

    const action = () => {
        setOculto(!oculto);
    };

    const actionLi = () => {
        setNoActive(!noActive)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${scrolling ? 'bg-white' : 'bg-transparent'}`}>
            <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 text-gray-500 hover:text-gray-700">
                        <a 
                            href="tel:+573124507294"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Click to call us"
                        >
                            <FiPhone size={20} />
                            <span>Llamar ahora</span>
                        </a>
                    </button>
                    <button className="flex items-center space-x-2 px-4 text-gray-500 hover:text-gray-700">
                        <a 
                            href="http://wa.me/573124507294?text=Hola%2C%20quisiera%20agendar%20una%20cita%20para%20mi%20mascota!"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Click to contact us by WhatsApp"
                        >
                            <FiCalendar size={20} />
                            <span>Agendar cita</span>
                        </a>
                    </button>
                    <button className="flex items-center space-x-2 px-4 text-gray-500 hover:text-gray-700">
                        <a 
                            href="https://www.google.com/maps/place/Vida+Animal+-+Centro+M%C3%A9dico+Veterinario/@5.4527656,-74.6688524,15.75z/data=!4m14!1m7!3m6!1s0x8e40dfe344812909:0xa5ca1aef1b0f65f6!2sVida+Animal+-+Centro+M%C3%A9dico+Veterinario!8m2!3d5.4546567!4d-74.6658299!16s%2Fg%2F11l1n9c_sn!3m5!1s0x8e40dfe344812909:0xa5ca1aef1b0f65f6!8m2!3d5.4546567!4d-74.6658299!16s%2Fg%2F11l1n9c_sn?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Click to contact us by call"
                        >
                            <FiMapPin size={20} />
                            <span>Cómo llegar</span>
                        </a>
                    </button>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={action}
                        data-collapse-toggle="navbar-hamburger"
                        type="button"
                        className="text-gray-500 hover:text-gray-700 pr-4"
                        aria-controls="navbar-hamburger"
                    >
                        {oculto ? <FiMenu size={40} /> : <FiX size={40} />}
                    </button>
                </div>
            </div>
            <div
                className={`${
                    oculto ? "hidden w-full" : "w-full"
                }`}
                id="navbar-hamburger"
            >
                 <ul className={`${scrolling ? 'bg-white' : 'bg-wallpaper'} flex flex-col mt-4 rounded-lg border-gray-200`}>
                    <li>
                        <Link
                            href="/"
                            className="flex items-center space-x-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-pink dark:hover:text-white"
                            aria-current="page"
                            onClick={action}
                        >
                            <FiHome size={20} />
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/AboutUs"
                            className="flex items-center space-x-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-pink dark:hover:text-white"
                            onClick={action}
                        >
                            <FiUsers size={20} />
                            <span>¿Quiénes somos?</span>
                        </Link>
                    </li>
                    <li>
                       <div className="flex items-center cursor-pointer items-center space-x-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-pink dark:hover:text-white">
                         <Link 
                            href='/Services'
                            className="flex flex-row"
                            onClick={action}
                        >
                            <FiPackage size={20} />
                            <span className="px-2">Servicios</span>
                        </Link>
                        <button
                             onClick={actionLi}
                            data-collapse-toggle="navbar-Services"
                            type="button"
                            className="text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-pink dark:hover:text-white pr-4"
                            aria-controls="navbar-Services"
                        >
                            {noActive ? <FiChevronDown size={15} /> : <FiChevronUp size={15} />}
                        </button>
                       </div>

                       <div
                            className={`${
                                noActive ? "hidden w-full" : "w-full"
                            }`}
                            id="navbar-Services"
                       >
                            <ul className={`${scrolling ? 'bg-white' : 'bg-wallpaper'}mt-2 space-y-1 px-4`}>
                                <li>
                                    <a
                                        href= '/Services/#Surgeries_and_emergencies'
                                        className="flex space-x-2 py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Cirugías y Emergencias</span>
                                        <FaRegHospital size={15} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href= '/Services/#General_inquiry'
                                        className="flex space-x-2 py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Consulta General</span>
                                        <FaUserMd size={15} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href= '/Services/#Hygienic_bathroom'
                                        className="flex space-x-2 py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Baño Higiénico</span>
                                        <FaDog size={15} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href= '/Services/#Sampling'
                                        className="flex space-x-2 py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Toma de Muestras</span>
                                        <FaCat size={15} />
                                        
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href= '/Services/#Dental_Prophylaxis'
                                        className="flex space-x-2 py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Profilaxis Dental</span>
                                        <FaTooth size={15} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href= '/Services/#Vaccination_plan'
                                        className="flex space-x-2 py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Plan de Vacunación</span>
                                        <FaSyringe size={15} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link
                            href="/Contact"
                            className="flex items-center space-x-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-pink dark:hover:text-white"
                            onClick={action}
                        >
                            <FiMail size={20} />
                            <span>Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
