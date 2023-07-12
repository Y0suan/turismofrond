import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components'
import Links from '../Card/Links';

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { FaHiking } from 'react-icons/fa';



const Dropdow = styled.div`
position: relative;
height: max-content;
.dropdown-menu {
  position: absolute;
  width: 300px; /* Ajusta el ancho deseado */
  height: max-content; /* Ajusta la altura deseada */
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
  padding: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: white;
  z-index: 1;

  h3{
    margin:0;
    padding:4px;
    text-align: center ;
    font-size: 24px;
    background-color:#226CE0;
    color:white;
  }
}

.dropdown-menu.open {
  max-height: 450px;
}
`;
const Btn = styled.button`
background-color:white;
font-size: 30px;
border:none;
display:flex;
align-items: center;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
padding: 20px 20px;
border-radius: 50%;
color:#226CE0;
background-color:#C8DBF8;
`;

const Senderismo = ({actividad}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
   

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

  return (
    <Dropdow>
    <div className="dropdown">
      <Btn className="dropdown-toggle" onClick={toggleDropdown}>
      <FaHiking/>
      {/* {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>} */}
      </Btn>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <h3>Senderismo</h3>
              {actividad.map((rapida) => (
              <Links  key={rapida._id} {...rapida} />
              ))}
      </ul>
    </div>
  </Dropdow>
  )
}

export default Senderismo