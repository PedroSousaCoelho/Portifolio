import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/a\i';
import Image from 'next/image/';
import pedro from "../public/eu.jpg";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import calculadora from "../public/calculadora.png";
import idalina from "../public/Idalina.png";
import Notion from "../public/Notion.png";
import pokedex from "../public/Pokedex.png";
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
              <h1 className='text-xl italic dark:text-white'>developebyPedro</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl dark:bg-white'/></li>
                <li><a href="https://drive.google.com/file/d/1-4lW42JbuImUujRbAr0nzWDJ2d8KeqxB/view?usp=sharing" target="_blank" rel="noreferrer" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5'>Curriculo</a></li>
              </ul>
            </nav>
            <div className='text-center p-10 py-10'>
              <h2 className='text-5xl py-2 text-blue-500 font-medium md:text-6xl'>Pedro Sousa Coelho</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor Web Full Stack</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xg mx-auto dark:text-white'>
              Sou um profissional de TI com experiência consolidada, buscando oportunidades para
              crescimento contínuo. Motivado, com facilidade de aprendizado, destaco-me por ser 
              eficiente no trabalho em equipe, comunicativo e dedicado a sempre alcançar os melhores resultados.
              </p>
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
            Busco minha primeira oportunidade como desenvolvedor backend, trazendo habilidades em React.js, Node.js e PHP. Estou atualmente cursando o quinto período de Sistema de Informação na Faculdade Estadual de Goiás e estou ansioso para aplicar meu conhecimento em um ambiente profissional.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 '>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Tecnologias e Linguagens</h3>
              <p className='py-2'>Tenho experiência prática em PHP, Node.js, React , JavaScript e TypeScri, aplicando essas habilidades no desenvolvimento de soluções eficientes. Minha proficiência abrange a criação de aplicações web dinâmicas com PHP, servidores escaláveis com Node.js, e interfaces interativas utilizando React e JavaScript.</p>
              <h4 className='py-4 text-teal-600'>Conhecimento:</h4>
              <p className='text-grey-800 py-1'>Git/ GitHub</p>
              <p className='text-grey-800 py-1'>MySQL/ MariaDB</p>
              <p className='text-grey-800 py-1'>PowerShell</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image src={design}width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Habilidade técnica</h3>
              <p className='py-2'>Sou uma pessoa altamente motivada, caracterizada por uma capacidade natural de aprendizado rápido. Estou comprometido com meu crescimento profissional, buscando constantemente oportunidades para aprimorar minhas habilidades e contribuir de maneira significativa para os desafios que enfrento.</p>
              <h4 className='py-4 text-teal-600'>Qualidades</h4>
              <p className='text-grey-800 py-1'>Suporte em gestão de mudança.</p>
              <p className='text-grey-800 py-1'>Gestão de serviços de T.I</p>
              <p className='text-grey-800 py-1'>Elaboração de relatorios.</p>
              <p className='text-grey-800 py-1'>Resolução de problemas</p>
              <p className='text-grey-800 py-1'>Comunicação Agil.</p>
            </div>

          </div>
        </section>
        <section>
          <div className='dark:text-white'>
            <h3 className='text-3xl py-1 text-center '>Alguns dos meus trabalhos:</h3>
            <p>
Ao longo do meu aprendizado diário, tenho trabalhado em projetos que não apenas fortalecem minhas habilidades técnicas, mas também refletem meu compromisso com a excelência. Essas experiências têm sido fundamentais para meu crescimento, proporcionando-me oportunidades valiosas de aplicar e aprimorar o conhecimento adquirido. Cada projeto representa um passo significativo em minha jornada de aprendizado constante.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className="basis-1/3 flex-1"><a href='https://pedrosousacoelho.github.io/calculadora/'><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={calculadora}/></a></div>
            <div className="basis-1/3 flex-1"><a href='https://www.idalinagusmaoatelier.com/'><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={idalina}/></a></div>
            <div className="basis-1/3 flex-1"><a href='https://notion-sage-kappa.vercel.app/'><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={Notion}/></a></div>
            <div className="basis-1/3 flex-1"><a href='http://pokedex-iota-black.vercel.app'><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={pokedex}/></a></div>
            
          </div>
        </section>
      </main>
    </div>
  )
}
