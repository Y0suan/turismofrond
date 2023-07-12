import Center from '@/Component/Center'
import Header from '@/Component/Header'
import Link from 'next/link';
import React , { useState } from 'react'
import styled from 'styled-components'

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

import { PiIceCream } from 'react-icons/pi';
import { IoIosArrowDown } from 'react-icons/io';



import Cafeteria from '@/Component/Categorias/Cafeterias';
import Bares from '@/Component/Categorias/Bares';
import Lista from '@/Component/Categorias/Lista';
import ComidaRapida from '@/Component/Drops/ComidaRapida';
import Heladerias from '@/Component/Drops/Heladerias';
import Cafes from '@/Component/Drops/Cafes';
import Restos from '@/Component/Drops/Bares';


const GastronomiaCont = styled.div`
color:#222222;
`;
const Title = styled.h1`
margin:0;
`;
const Title2 = styled.h2`
margin:0;
`;
const Subtitle = styled.p`
margin:16px 0px;
.maps{
  font-weight: 600;
  color:#222222;
}
`;

const ImgCont = styled.div`
overflow: hidden;
border-radius: 8px;
width: 100%;
height: 50vh;
display: flex;
gap:8px;

.mitad{
  width: 100%;
  height:100%;
  gap:8px;
  display:flex;
  flex-wrap: wrap;
  overflow: hidden;
  img{
  width: 100%;
  }
  .mitad2{
  background-color: blue;
  width: 49%;
  height:49%;
  }
}
.adapter{
  display:none;
}
@media screen and (min-width:768px){
  .adapter{
  display:flex;
}
}
`;

const Info = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
`;

const LinksAdicionales = styled.div`
border-top: 1px solid #CFC9D1;
width: 100%;
height: auto;
display:flex;
flex-wrap:wrap;
.mitadCont{
  padding:24px;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-size: 2rem;
  }
}
.imgCont{
display: none;

}
.link{
  display :flex;
  align-items: center;
  gap:8px;
}
@media screen and (min-width:768px){
  height: 80vh;
  display:flex;
  .mitadCont{
  width: 45%;
  }
  .imgCont{
    display: flex;
    justify-content: center;
    align-items: center;
  width: 50%;
  height: 100%;
  img{
    width:auto;
    height: 90%;
    border-radius: 8px;
  }
}

}
`;




const Gastronomia = ({cafes,bares,helados,deliveri}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Header/>
    <Center>
      <GastronomiaCont>
        <Title>Gastronomia</Title>
        <Subtitle>Descubre la exquisita gastronomía de <Link href={'/'} className='maps'>Eldorado, Misiones</Link></Subtitle>
        <ImgCont>
         <div className='mitad'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688414999/agenda-next-panel/v8exwpgfg7yacmeyuaxq.jpg' ></img>
         </div>
         <div  className='mitad adapter' >
         <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688414986/agenda-next-panel/wl2srd8xkge6qy5qwlqy.jpg' ></img>
         </div>
          <div className='mitad2'>
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688415041/agenda-next-panel/zrnwp8lentu1wjitymu2.jpg' ></img>
          </div>
          <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688414640/agenda-next-panel/fnqlh5yh6iur22j7k1fm.jpg' ></img>
          </div>
          <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688421409/agenda-next-panel/fs7m5zy2jstinzqi5hok.jpg' ></img>
          </div>
         </div>
        </ImgCont>
      </GastronomiaCont>

    </Center>
    <Info>
          <Cafeteria cafes={cafes}></Cafeteria>
          <Bares bares={bares} ></Bares>

      
          <LinksAdicionales>
          <div className='mitadCont' >
            <h2>No te pierdas de nada </h2>
            <div className='link'>
            <ComidaRapida comidaRapida={deliveri} />
            <div>
              <h4>Comida Rapida</h4>
              <p>Pidelo donde sea que estes</p>
            </div>
            </div>

            <div className='link'>
            <Heladerias comidaRapida={helados} />
            <div>
              <h4>Heladerias</h4>
              <p>Pidelo donde sea que estes</p>
            </div>
            </div>

            <div className='link'>
            <Cafes comidaRapida={cafes} />
            <div>
              <h4>Cafeterias</h4>
              <p>Pidelo donde sea que estes</p>
            </div>
            </div>

            <div className='link'>
            <Restos comidaRapida={cafes} />
            <div>
              <h4>Bares y Restaurantes</h4>
              <p>Pidelo donde sea que estes</p>
            </div>
            </div>

          </div>
          <div className='imgCont' >
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688414999/agenda-next-panel/v8exwpgfg7yacmeyuaxq.jpg' ></img>
          </div>
          </LinksAdicionales>
    </Info>
    </>

  )
}

export default Gastronomia


export async function getServerSideProps() {
  try {
    const heladoFilterValue = '649c1a6ca4874ddc3b19ab21'; // ID de la categoría de Cafés
    const cafeFilterValue = '649c1a49a4874ddc3b19ab19'; // ID de la categoría de Cafés
    const barFilterValue = '649c1a73a4874ddc3b19ab25'; // ID de la categoría de Bares
    const comidaRapidaFilterValue = '649c1a53a4874ddc3b19ab1d'; // ID de la categoría de Comida Rápida
    
    await mongooseConnect();
    
    const barProducts = await Product.find({ category: barFilterValue }, null, { sort: { '_id': -1 } });
    const cafeProducts = await Product.find({ category: cafeFilterValue }, null, { sort: { '_id': -1 } });
    const heladoProducts = await Product.find({ category: heladoFilterValue }, null, { sort: { '_id': -1 } });
    const comidaRapidaProducts = await Product.find({ category: comidaRapidaFilterValue }, null, { sort: { '_id': -1 } });

    return {
      props: {
        bares: JSON.parse(JSON.stringify(barProducts)),
        cafes: JSON.parse(JSON.stringify(cafeProducts)),
        helados: JSON.parse(JSON.stringify(heladoProducts)),
        deliveri: JSON.parse(JSON.stringify(comidaRapidaProducts)),
      },
    };
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return {
      props: {
        bares: [],
        cafes: [],
        helados: [],
        deliveri: [],
      },
    };
  }
}
