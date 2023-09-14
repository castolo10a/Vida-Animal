'use client'

import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiCalendar, FiMapPin, FiHome, FiUsers, FiPackage, FiMail } from 'react-icons/fi';
import Link from "next/link";
import Logo from "./logo";
import { FaCat, FaDog, FaRegHospital, FaSyringe, FaTooth, FaUserMd } from "react-icons/fa";

export default function NavBar() {
    const [oculto, setOculto] = useState(true);
    const [scrolling, setScrolling] = useState(false);

    const action = () => {
        setOculto(!oculto);
    };

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
                            href="https://www.google.com/maps/place/Vida+Animal/@5.4503764,-74.6660511,17z/data=!3m1!4b1!4m6!3m5!1s0x8e40dfe344812909:0xa5ca1aef1b0f65f6!8m2!3d5.4503764!4d-74.6634762!16s%2Fg%2F11l1n9c_sn?entry=ttu"
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
                 <ul className={`${scrolling ? 'bg-white' : 'bg-pink2'} flex flex-col mt-4 rounded-lg border-gray-200`}>
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
                        <details className="group">
                        <summary
                            className="flex cursor-pointer items-center space-x-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-pink dark:hover:text-white"
                        >
                            <div className="flex items-center">
                                <FiPackage size={20} />
                                <span className="ml-2">Servicios</span>
                            </div>
                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                            <ul className={`${scrolling ? 'bg-white' : 'bg-pink2'}mt-2 space-y-1 px-4`}>
                                <li>
                                <Link
                                    href= "/Services#Surgeries_and_emergencies" passHref
                                >
                                    <div
                                        className="flex items-center space-x-2 block py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Cirugías y Emergencias</span>
                                        <FaRegHospital size={15} />
                                    </div>
                                </Link>
                                </li>
                                <li>
                                <Link
                                    href= '/Services/#General_inquiry' passHref
                                >
                                    <div
                                        className="flex items-cantidadenter space-x-2 block py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Consulta General</span>
                                        <FaUserMd size={15} />
                                    </div>
                                </Link>
                                </li>
                                <li>
                                <Link
                                    href="/Services#Hygienic_bathroom" passHref
                                >
                                    <div
                                        className="flex items-cantidadenter space-x-2 block py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Baño Higiénico</span>
                                        <FaDog size={15} />
                                    </div>
                                </Link>
                                </li>
                                <li>
                                <Link
                                    href="/Services#Sampling"
                                    passHref
                                >
                                    <div
                                        className="flex items-cantidadenter space-x-2 block py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Toma de Muestras</span>
                                        <FaCat size={15} />
                                    </div>
                                </Link>
                                </li>
                                <li>
                                <Link
                                    href="/Services#Dental_Prophylaxis"
                                    passHref
                                >
                                    <div
                                        className="flex items-cantidadenter space-x-2 block py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Profilaxis Dental</span>
                                        <FaTooth size={15} />
                                    </div>
                                </Link>
                                </li>
                                <li>
                                <Link
                                    href="/Services#Vaccination_plan"
                                    passHref
                                >
                                    <div
                                        className="flex items-cantidadenter space-x-2 block py-2 pl-3 pr-4 rounded text-sm text-gray-500 hover:bg-green hover:text-gray-700"
                                        onClick={action}
                                    >
                                        <span>Plan de Vacunación</span>
                                        <FaSyringe size={15} />
                                    </div>
                                </Link>
                                </li>
                            </ul>
                        </details>
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
