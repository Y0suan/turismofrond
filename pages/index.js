import Eldorado from "@/Component/Eldorado";
import Explora from "@/Component/Explora";
import Header from "@/Component/Header";
import Natutales from "@/Component/Natutales";
import Gastronomia from "@/Component/Gastronomia";
import styled from 'styled-components'


import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";


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



export default function HomePage({hoteles,cafes,kayak,cicloturismo,senderismo}){
  return(
    <div>
      <Header/>
      {/* <Explora/> */}
      <Eldorado/>
      <Natutales naturales={hoteles} />
      <Gastronomia naturales={cafes} />


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

    </div>
  );
}



export async function getServerSideProps() {
  try {
    const hotelFilterValue = '649c1f08a4874ddc3b19abba';
    const cafeFilterValue = '6480873ee963e8575df64abc'; // ID de la categoría de Cafes
    const cicloturismoFilterValue = '649c2c62a4874ddc3b19ac53'; // ID de la categoría de Cicloturismo
    const senderismoFilterValue = '649c2c42a4874ddc3b19ac4f'; // ID de la categoría de Senderismo
    const kayakFilterValue = '649c2b44a4874ddc3b19ac40'; // ID de la categoría de Kayak

    await mongooseConnect();

    const hotelProducts = await Product.find({ category: hotelFilterValue }, null, { sort: { '_id': -1 } });
    const cafeProducts = await Product.find({ category: cafeFilterValue }, null, { sort: { '_id': -1 } });
    const cicloturismoProducts = await Product.find({ category: cicloturismoFilterValue }, null, { sort: { '_id': -1 } });
    const senderismoProducts = await Product.find({ category: senderismoFilterValue }, null, { sort: { '_id': -1 } });
    const kayakProducts = await Product.find({ category: kayakFilterValue }, null, { sort: { '_id': -1 } });

    const firstThreeHotelProducts = hotelProducts.slice(0, 7); // Obtener los primeros tres productos de la categoría de hoteles
    const firstThreeCafeProducts = cafeProducts.slice(0, 6); // Obtener los primeros tres productos de la categoría de cafes

    return {
      props: {
        hoteles: JSON.parse(JSON.stringify(firstThreeHotelProducts)),
        cafes: JSON.parse(JSON.stringify(firstThreeCafeProducts)),
        cicloturismo: JSON.parse(JSON.stringify(cicloturismoProducts)),
        senderismo: JSON.parse(JSON.stringify(senderismoProducts)),
        kayak: JSON.parse(JSON.stringify(kayakProducts)),
      },
    };
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return {
      props: {
        hoteles: [],
        cafes: [],
        cicloturismo: [],
        senderismo: [],
        kayak: [],
      },
    };
  }
}
