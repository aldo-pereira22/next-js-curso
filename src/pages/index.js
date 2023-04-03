import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
      <div>
        <h1>Página Inicial!!!</h1>
      </div>
  )
}
