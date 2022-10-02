import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/a\i';
import Image from 'next/image/';
import pedro from "../public/Pedro.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";


export default function Home() {
  return (
    <div>
      <Head> 
        <title>Pedro Sousa Coelho</title>
        <meta name = "desciption"></meta>
      </Head>
    
      <main className='bg-white px-10 '> 
        <section class = "min-h-screen">
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl'>developebyPedro</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
                <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10 py-10'>
              <h2 className='text-5xl py-2 text-blue-500 font-media'>Pedro Sousa Coelho</h2>
              <h3 className='text-2xl py-2'>Desenvolvedor WEB3</h3>
              <p className='text-md py-5 leading-8 text-gray-800'>Entre em contato através das redes sociais.</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://twitter.com/pedrosousac"><AiFillTwitterCircle /></a> 
              <a href="https://www.linkedin.com/in/pedrosousacoelhooo/"><AiFillLinkedin /></a>
              <a href="https://www.instagram.com/pedrosousa.c/"><AiFillInstagram /></a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
              <Image src={pedro} layout="fill" objectFit="cover"/>
            </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Serviços</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'>
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </p>
          </div>
          <div>
            <div>
              <Image src={consulting}/>
              <Image src={design}/>
              <Image src={code}/> 
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
