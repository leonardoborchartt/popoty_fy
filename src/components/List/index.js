import React from 'react';


import { IoIosAddCircleOutline } from "react-icons/io";

import Card from '../Card';

import { Container } from './styles';

function handleClick() {
  window.alert("Eu sabia que iria clicar nesse botao mas ele não faz nada, talkey?!");
}

export default function List({ data, index: listIndex }) {
  return (

    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
            <IoIosAddCircleOutline size={30} color="#000" onClick={handleClick} />
        )}
    
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />))}
      </ul>
    </Container>
  );
}
