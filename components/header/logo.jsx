import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo_sin_fondo.png'

export default function Logo() {
    return (
        <Link href="/" className="animate-fade-down animate-duration-[5000ms] flex justify-center md:w-72 w-64 p-4">
                <Image src={logo} alt="logo sin fondo" />
        </Link>
    )
}