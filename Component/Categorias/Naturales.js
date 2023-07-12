import React, { useRef } from 'react';
import styled from 'styled-components'
import Card from '../Card/Card';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';


import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';



const StyledNaturales = styled.div`
background-color: white;
width: 100%;
.scroll{
    overflow: hidden;
  overflow-x: scroll;
  }
  .scroll::-webkit-scrollbar {
    width: 16px; 
  }
  .scroll::-webkit-scrollbar-track {
    background-color: white; /* Color del fondo del scroll */
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: transparent; /* Color del scroll */
    border-radius: 4px; /* Radio de borde del scroll */
  }

`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const Center = styled.div`
max-width: auto;
margin:50px auto;
margin-top:100px;
padding:0 24px;
h2{
  display: flex;
  align-items: center;
  margin:8px;
  margin-bottom: 16px;
}
`
const Subtitle = styled.div`
  margin:0;
  color:#2563eb;
`
const ArrowLink = styled(Link)`
  margin:0;
  color:#2563eb;
  display: flex;
  align-items: center;
  .icon{
  color:#2563eb;
  }
`

const Botones = styled.button`
  margin:8px;
  padding:4px 6px;
  font-size: 16px;
  color:black;
  border-radius: 50%;
  border:none;
  background-color: transparent;

`



const Naturales = ({ cafes }) => {
  const cafesConImagen = cafes.filter((bar) => bar.images && bar.images.length > 0);
  
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -1000, // Cantidad de desplazamiento hacia la izquierda
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 1000, // Cantidad de desplazamiento hacia la derecha
      behavior: 'smooth' // Desplazamiento suave
    });
  };


    return (
      <StyledNaturales>
        <Center>
          <Subtitle>Naturales</Subtitle>
          <h2>
            Descubre Nuestros Atractivos{" "}
            <ArrowLink href={"/Gastronomia"}>
              <MdOutlineArrowForwardIos className="icon" />
            </ArrowLink>
          </h2>
          <Botones className="scroll-button left" onClick={handleScrollLeft}><MdArrowBackIosNew/></Botones>
          <Botones className="scroll-button right" onClick={handleScrollRight}><MdArrowForwardIos/></Botones>
          <Wrapper className='scroll' ref={scrollContainerRef} >
            {cafesConImagen?.map((natural) => (
              <Card key={natural._id} {...natural} />
            ))}
          </Wrapper>
        </Center>
      </StyledNaturales>
    );
  };
  

export default Naturales


  
