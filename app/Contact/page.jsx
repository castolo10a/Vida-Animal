'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import contact from '@/assets/contact.jpg';
import { SiDatadog } from 'react-icons/si';
import Swal from "sweetalert2";
import { Amita } from 'next/font/google'

const amita = Amita({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin']
})

const initialState = {
  name: '',
  email: '',
  message: ''
}

export default function Contact(){
    const form = useRef();
    const [input, setInput] = useState(initialState);
    const [err, setErr] = useState(initialState);
  
    const validateEmail = (email) => {
      const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      return regex.test(email)
    }
  
    const validateName = (name) => {
      const nombreExpReg = /^[a-zA-Z\s]*$/;
      return nombreExpReg.test(name)
    }
  
    const validate = (input) => {
      const err = {}
  
      if (!input.name) {
        err.name = 'Debe ingresar un nombre'
      }
      if (!validateName(input.name)) {
          err.name = 'Debe ingresar un nombre valido'
      }
      if (!input.message) {
        err.message = 'Debe ingresar un mensaje'
      }
      if (!input.email) {
        err.email = 'Debe ingresar un correo'
      }
      if (!validateEmail(input.email)) {
        err.email = 'Debe ingresar un correo valido'
      }
      return err
    }
  
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setInput((prev) => ({
        ...prev,
        [name]: value
      }))
  
      setErr(
        validate({
          ...input,
          [name]: value
        })
      )
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(Object.values(err).length > 0 || Object.values(input).length === 0){
        Swal.fire({
          title: 'Complete los campos Obligatorios!',
          text: 'Revise los datos ingresados',
          icon: 'error',
          confirmButtonText: 'Ok',
          customClass: {
            title: 'md:text-4xl',
            confirmButton: 'bg-pink hover:bg-opacity-75 text-gray-200 py-2 px-4 rounded',
          },
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show',
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide',
          }
        })
      }else{
        Swal.fire({
          title: 'Mensaje enviado con exito!',
          text: 'Responderemos a su consulta lo antes posible. ¡Gracias por confiar en nosotros para el cuidado de su mascota!',
          icon: 'success',
          confirmButtonText: 'Ok',
          customClass: {
            title: 'md:text-4xl',
            confirmButton: 'bg-pink hover:bg-opacity-75 text-gray-200 py-2 px-4 rounded',
          },
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show',
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide',
          }
        })
        // emailjs
        //   .sendForm(
        //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
        //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        //     form.current,
        //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result.text)
        //     },
        //     (error) => {
        //       console.log(error.text)
        //     }
        //   )
        setInput(initialState)
      }
    }
    return (
      <div>
      <div className={`${amita.className} bg-wallpaper flex flex-col justify-center items-center text-center mx-auto px-6 py-40 md:px-4`}>
            <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 text-xl md:text-2xl z-10">¿Tienes alguna duda o solicitud?</h2>
            <h2 className="animate-fade-left animate-duration-[5000ms] text-gray-500 text-4xl md:text-6xl px-8 md:pb-8">
            Contáctanos
            </h2>
      </div>
      <section className="mx-auto py-4 md:py-8">
        <div className="md:grid md:min-h-screen md:grid-cols-12 py-12">
          <aside
            className="relative block h-16 md:order-last md:col-span-5 h-full md:col-span-6"
          >
            <Image
              alt="huellas"
              src={contact}
              className="absolute rounded-xl inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl">
              <Link href="/">
                <SiDatadog size={60} className="text-gray-500 hover:text-gray-700"/>
              </Link>

              <h1
                className="mt-6 text-2xl font-bold text-gray-500 sm:text-3xl md:text-4xl"
              >
                Contáctanos hoy mismo🐾
              </h1>

              <p className="mt-4 leading-relaxed text-gray-700">
              Si tienes preguntas, comentarios, sugerencias o solicitudes, no dudes en ponerte en contacto con nosotros. Puedes enviarnos un correo electrónico o encontrarnos en las redes sociales. Estamos aquí para ayudarte y te responderemos lo antes posible.
              </p>

              <form ref={form} className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
                <div className="col-span-6">
                  <input
                    placeholder="Nombre Completo*"
                    type="text"
                    name="name"
                    value={input.name}
                    id="name"
                    className="p-2 w-full rounded-md border-gray-500 bg-white text-base text-gray-700 shadow-lg"
                    autoComplete="off"
                    onChange={handleChange}
                    />
                  <span
                        hidden={!err.name}
                        className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-base"
                        >
                        {err.name}
                    </span>
                </div>


                <div className="col-span-6">
                  <input
                    placeholder="Email*"
                    type="email"
                    name="email"
                    value={input.email}
                    id="email"
                    className="p-2 w-full rounded-md border-gray-500 bg-white text-base text-gray-700 shadow-lg"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <span
                        hidden={!err.email}
                        className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-base"
                    >
                        {err.email}
                    </span>
                </div>

                <div className="col-span-6">
                  <textarea
                    placeholder="Mensaje*"
                    name="message"
                    value={input.message}
                    cols="30"
                    rows="8"
                    className="p-2 w-full rounded-md border-gray-500 bg-white text-base text-gray-700 shadow-lg"
                    autoComplete="off"
                    onChange={handleChange}
                  ></textarea>
                    <span
                      hidden={!err.message}
                      className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-base"
                    >
                      {err.message}
                    </span>
                </div>

                <div className="col-span-6 flex justify-center items-center gap-4">
                  <button
                    className="bg-pink hover:bg-opacity-75 border rounded-lg text-gray-200 px-4 py-2 mt-4 text-lg md:text-xl"
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      </div>
    )
}