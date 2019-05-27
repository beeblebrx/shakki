import React from 'react';
import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';

const initialState = () => {
  return {
    pieces: {
      'B1' : <Pawn color='white' id={1} />,
      'B2' : <Pawn color='white' id={2} />,
      'B3' : <Pawn color='white' id={3} />,
      'B4' : <Pawn color='white' id={4} />,
      'B5' : <Pawn color='white' id={5} />,
      'B6' : <Pawn color='white' id={6} />,
      'B7' : <Pawn color='white' id={7} />,
      'B8' : <Pawn color='white' id={8} />,
      'A1' : <Rook color='white' id={9} />,
      'A2' : <Knight color='white' id={10} />,
      'A3' : <Bishop color='white' id={11} />,
      'A4' : <Queen color='white' id={12} />,
      'A5' : <King color='white' id={13} />,
      'A6' : <Bishop color='white' id={14} />,
      'A7' : <Knight color='white' id={15} />,
      'A8' : <Rook color='white' id={16} />,
      'G1' : <Pawn color='black' id={17} />,
      'G2' : <Pawn color='black' id={18} />,
      'G3' : <Pawn color='black' id={19} />,
      'G4' : <Pawn color='black' id={20} />,
      'G5' : <Pawn color='black' id={21} />,
      'G6' : <Pawn color='black' id={22} />,
      'G7' : <Pawn color='black' id={23} />,
      'G8' : <Pawn color='black' id={24} />,
      'H1' : <Rook color='black' id={25} />,
      'H2' : <Knight color='black' id={26} />,
      'H3' : <Bishop color='black' id={27} />,
      'H4' : <Queen color='black' id={28} />,
      'H5' : <King color='black' id={29} />,
      'H6' : <Bishop color='black' id={30} />,
      'H7' : <Knight color='black' id={31} />,
      'H8' : <Rook color='black' id={32} />
    }
  };
};

export default initialState;