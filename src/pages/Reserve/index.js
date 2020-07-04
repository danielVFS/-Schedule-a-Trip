import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdDelete } from 'react-icons/md';
import { Container, Reservations, Footer } from './styles';

function Reservation() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve);

  function handleRemove(id) {
    dispatch({
      type: 'REMOVE_RESERVE',
      id,
    });
  }

  return (
    <Container>
      <h1>Você solicitou {reserves.length} reservas.</h1>

      {reserves.map((reserve) => (
        <Reservations key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button
            type="button"
            onClick={() => {
              handleRemove(reserve.id);
            }}
          >
            <MdDelete size={20} color="#191919" />
          </button>
        </Reservations>
      ))}
      <Footer>
        <button type="button">Solicitar Reserva</button>
      </Footer>
    </Container>
  );
}

export default Reservation;
