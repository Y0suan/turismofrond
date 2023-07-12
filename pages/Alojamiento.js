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
import Urbanos from '@/Component/Categorias/Urbanos';
import Naturales from '@/Component/Categorias/Naturales';
import AireLibre from '@/Component/Categorias/AireLibre';


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
overflow:hidden;
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




const Actividades = ({urbanos,aireLibre}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Header/>
    <Center>
      <GastronomiaCont>
        <Title>Alojamientos</Title>
        <Subtitle>Descubre <Link href={'/'} className='maps'>Eldorado, Misiones</Link></Subtitle>
        <ImgCont>
         <div className='mitad'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688395292/agenda-next-panel/vrmkbp1fy4hw4w6dhetz.jpg'></img>
          </div>
         <div  className='mitad adapter' >
         <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688395909/agenda-next-panel/bym6gcarhxs2zajsppiu.jpg' ></img>
         </div>
          <div className='mitad2'>
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688396125/agenda-next-panel/fvysish1mlgzedkzeilq.jpg' ></img>
          </div>
          <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688396633/agenda-next-panel/gqptslmqifvsndnmixbt.jpg' ></img>
          </div>
          <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688395426/agenda-next-panel/circutlxs253zas7vcff.jpg' ></img>
          </div>
         </div>
        </ImgCont>
      </GastronomiaCont>

    </Center>
    <Info>
    
         <Urbanos cafes={urbanos}></Urbanos>
         <AireLibre cafes={aireLibre} ></AireLibre>
{/*       
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
          </LinksAdicionales> */}
    </Info>
    </>

  )
}

export default Actividades


export async function getServerSideProps() {
  try {
    const urbanosFilterValue = '649c2dcba4874ddc3b19ac5d'; // ID de la categoría "urbanos"
    const aireLibreFilterValue = '649c2e12a4874ddc3b19ac61'; // ID de la categoría "aire libre"

    await mongooseConnect();

    const urbanosProducts = await Product.find({ category: urbanosFilterValue }, null, { sort: { '_id': -1 } });
    const aireLibreProducts = await Product.find({ category: aireLibreFilterValue }, null, { sort: { '_id': -1 } });

    return {
      props: {
        urbanos: JSON.parse(JSON.stringify(urbanosProducts)),
        aireLibre: JSON.parse(JSON.stringify(aireLibreProducts)),
      },
    };
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return {
      props: {
        urbanos: [],
        aireLibre: [],
      },
    };
  }
}
