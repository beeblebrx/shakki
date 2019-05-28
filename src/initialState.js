import React from 'react';
import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';
import { WHITE, BLACK } from './constants';

const initialState = () => {
  return {
    turn: WHITE,
    pieces: {
      'B1' : <Pawn color={WHITE} id={1} />,
      'B2' : <Pawn color={WHITE} id={2} />,
      'B3' : <Pawn color={WHITE} id={3} />,
      'B4' : <Pawn color={WHITE} id={4} />,
      'B5' : <Pawn color={WHITE} id={5} />,
      'B6' : <Pawn color={WHITE} id={6} />,
      'B7' : <Pawn color={WHITE} id={7} />,
      'B8' : <Pawn color={WHITE} id={8} />,
      'A1' : <Rook color={WHITE} id={9} />,
      'A2' : <Knight color={WHITE} id={10} />,
      'A3' : <Bishop color={WHITE} id={11} />,
      'A4' : <Queen color={WHITE} id={12} />,
      'A5' : <King color={WHITE} id={13} />,
      'A6' : <Bishop color={WHITE} id={14} />,
      'A7' : <Knight color={WHITE} id={15} />,
      'A8' : <Rook color={WHITE} id={16} />,
      'G1' : <Pawn color={BLACK} id={17} />,
      'G2' : <Pawn color={BLACK} id={18} />,
      'G3' : <Pawn color={BLACK} id={19} />,
      'G4' : <Pawn color={BLACK} id={20} />,
      'G5' : <Pawn color={BLACK} id={21} />,
      'G6' : <Pawn color={BLACK} id={22} />,
      'G7' : <Pawn color={BLACK} id={23} />,
      'G8' : <Pawn color={BLACK} id={24} />,
      'H1' : <Rook color={BLACK} id={25} />,
      'H2' : <Knight color={BLACK} id={26} />,
      'H3' : <Bishop color={BLACK} id={27} />,
      'H4' : <Queen color={BLACK} id={28} />,
      'H5' : <King color={BLACK} id={29} />,
      'H6' : <Bishop color={BLACK} id={30} />,
      'H7' : <Knight color={BLACK} id={31} />,
      'H8' : <Rook color={BLACK} id={32} />
    }
  };
};

export default initialState;