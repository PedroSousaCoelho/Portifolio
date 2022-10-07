import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/a\i';
import Image from 'next/image/';
import pedro from "../public/Pedro.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head> 
        <title>Pedro Sousa Coelho</title>
        <meta name = "desciption"></meta>
      </Head>
    
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black'> 
        <section class = "min-h-screen">
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl dark:text-white'>developebyPedro</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl dark:bg-white'/></li>
                <li><a href="https://drive.google.com/file/d/1-4lW42JbuImUujRbAr0nzWDJ2d8KeqxB/view?usp=sharing" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5'>Curriculo</a></li>
              </ul>
            </nav>
            <div className='text-center p-10 py-10'>
              <h2 className='text-5xl py-2 text-blue-500 font-medium md:text-6xl'>Pedro Sousa Coelho</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor Web Full Stack</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Olá, meu nome e Pedro</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://twitter.com/pedrosousac"><AiFillTwitterCircle /></a> 
              <a href="https://www.linkedin.com/in/pedrosousacoelhooo/"><AiFillLinkedin /></a>
              <a href="https://www.instagram.com/pedrosousa.c/"><AiFillInstagram /></a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image src={pedro} layout="fill" objectFit="cover"/>
            </div>
        </section>

        <section>
          <div className='text-center dark:text-white' >
            <h3 className='text-3xl py-10'>Serviços</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'>
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 '>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Design Topzera</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur laboriosam impedit tempore atque nemo provident debitis commodi, natus magnam velit explicabo sint itaque recusandae? Enim, atque. Officiis, nobis dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquid ipsa consequuntur fuga modi veritatis excepturi consequatur repudiandae, exercitationem porro iste quam, possimus saepe! Quia sed blanditiis ipsa impedit cumque.</p>
              <h4 className='py-4 text-teal-600'>Design tools</h4>
              <p className='text-grey-800 py-1'>1</p>
              <p className='text-grey-800 py-1'>2</p>
              <p className='text-grey-800 py-1'>3</p>
              <p className='text-grey-800 py-1'>4</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image src={design}width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Design Topzera</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure unde id quasi nihil a illum suscipit? Ipsam mollitia ad accusamus aperiam pariatur, esse dignissimos minus unde inventore sed, suscipit perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium et eos error ipsa molestias, in officia commodi consequatur sunt provident doloribus dolore tenetur explicabo eum blanditiis fuga natus veritatis distinctio!</p>
              <h4 className='py-4 text-teal-600'>Design tools</h4>
              <p className='text-grey-800 py-1'>1</p>
              <p className='text-grey-800 py-1'>2</p>
              <p className='text-grey-800 py-1'>3</p>
              <p className='text-grey-800 py-1'>4</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
            <Image src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Design Topzera</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae soluta suscipit ullam minus reiciendis corporis nemo laboriosam id tenetur! Error animi voluptate autem itaque, aut voluptates eaque illo similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta iste corporis commodi qui vel rerum est, non ut veritatis, corrupti deleniti sunt veniam explicabo quae architecto quo debitis ex!</p>
              <h4 className='py-4 text-teal-600'>Design tools</h4>
              <p className='text-grey-800 py-1'>1</p>
              <p className='text-grey-800 py-1'>2</p>
              <p className='text-grey-800 py-1'>3</p>
              <p className='text-grey-800 py-1'>4</p>
            </div>
          </div>
        </section>
        <section>
          <div className='dark:text-white'>
            <h3 className='text-3xl py-1 text-center '>Portifolio</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus, et rerum quae, ducimus in molestias similique placeat repudiandae, voluptas dolores dolorum ipsum nesciunt atque dolore aperiam tempore dicta quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet quidem nostrum eius cum provident adipisci velit laboriosam expedita saepe corporis ad neque odit quod officia reiciendis, incidunt fugiat ipsa!
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web1}/></div>
            <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web2}/></div>
            <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web3}/></div>
            <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web4}/></div>
            <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web5}/></div>
            <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web6}/></div>
          </div>
        </section>
      </main>
    </div>
  )
}
