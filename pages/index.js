import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Expert from '../components/Expert'
import Menu from '../components/Menu'
import Testimonial from '../components/Testimonial'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='mt-5 mb-5'>
      <About></About>
      <Menu></Menu>
      <Expert></Expert>
      <Testimonial></Testimonial>
    </div>
  )
}
