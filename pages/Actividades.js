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
import Kayak from '@/Component/Drops/Kayak';
import Senderismo from '@/Component/Drops/Senderismo';
import Cicloturismo from '@/Component/Drops/Cicloturismo';


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
padding:24px;

.mitad{
  width: 100%;
  height:100%;
  gap:8px;
  display:flex;
  flex-wrap: wrap;
  img{
  width: 100%;
  height:100%;
  }
  .mitad2{
  width: 49%;
  height:49%;
  overflow: hidden;
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




const Actividades = ({cicloturismo,senderismo,kayak}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Header/>
    <Center>
      <GastronomiaCont>
        <Title>Actividades</Title>
        <Subtitle>Descubre <Link href={'/'} className='maps'>Eldorado, Misiones</Link></Subtitle>
        <ImgCont>
         <div className='mitad'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688424667/agenda-next-panel/jdtva8nkkrm0tkctaa4d.jpg' ></img>
         </div>
         <div  className='mitad adapter' >
         <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688426817/agenda-next-panel/pfremtw6ntvnt14y5cr8.jpg' ></img>
         </div>
          <div className='mitad2'>
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688424528/agenda-next-panel/owo34x32evpelenq7ukk.jpg' ></img>
          </div>
          <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688423209/agenda-next-panel/tq32jj2ivcwbopa4fw7m.jpg' ></img>
          </div>
          <div className='mitad2'>
          <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688423406/agenda-next-panel/wjqsremmwq5dlxk0sna7.jpg' ></img>
          </div>
         </div>
        </ImgCont>
      </GastronomiaCont>

    </Center>
    <Info>
    


      
          <LinksAdicionales>
          <div className='mitadCont' >
            <h2>No te pierdas de nada </h2>

            <div className='link'>
            <Kayak actividad={kayak} />
            <div>
              <h4>Kayak</h4>
              <p>No te pierdas de nada </p>
            </div>
            </div>

            <div className='link'>
            <Senderismo actividad={senderismo} />
            <div>
              <h4>Senderismo</h4>
              <p>No te pierdas de nada </p>
            </div>
            </div>
          
            <div className='link'>
            <Cicloturismo actividad={cicloturismo} />
            <div>
              <h4>Cicloturismo</h4>
              <p>No te pierdas de nada </p>
            </div>
            </div>

          </div>
          <div className='imgCont' >
            <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1688422550/agenda-next-panel/inyrov7cesjdunjm5dme.jpg' ></img>
          </div>
          </LinksAdicionales>
    </Info>
    </>

  )
}

export default Actividades

export async function getServerSideProps() {
  try {
    const cicloturismoFilterValue = '649c2c62a4874ddc3b19ac53'; // ID de la categoría de Cicloturismo
    const senderismoFilterValue = '649c2c42a4874ddc3b19ac4f'; // ID de la categoría de Senderismo
    const kayakFilterValue = '649c2b44a4874ddc3b19ac40'; // ID de la categoría de Kayak
    
    await mongooseConnect();
    
    const cicloturismoProducts = await Product.find({ category: cicloturismoFilterValue }, null, { sort: { '_id': -1 } });
    const senderismoProducts = await Product.find({ category: senderismoFilterValue }, null, { sort: { '_id': -1 } });
    const kayakProducts = await Product.find({ category: kayakFilterValue }, null, { sort: { '_id': -1 } });

    return {
      props: {
        cicloturismo: JSON.parse(JSON.stringify(cicloturismoProducts)),
        senderismo: JSON.parse(JSON.stringify(senderismoProducts)),
        kayak: JSON.parse(JSON.stringify(kayakProducts)),
      },
    };
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return {
      props: {
        cicloturismo: [],
        senderismo: [],
        kayak: [],
      },
    };
  }
}
