import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='mt-5 mb-5'>
      <About></About>
      <Menu></Menu>
    </div>
  )
}
