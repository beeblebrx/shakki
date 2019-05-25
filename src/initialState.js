import React from 'react';
import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';

export default function initialState() {
    return {
        'B1' : <Pawn color='white' />,
        'B2' : <Pawn color='white' />,
        'B3' : <Pawn color='white' />,
        'B4' : <Pawn color='white' />,
        'B5' : <Pawn color='white' />,
        'B6' : <Pawn color='white' />,
        'B7' : <Pawn color='white' />,
        'B8' : <Pawn color='white' />,
        'A1' : <Rook color='white' />,
        'A2' : <Knight color='white' />,
        'A3' : <Bishop color='white' />,
        'A4' : <Queen color='white' />,
        'A5' : <King color='white' />,
        'A6' : <Bishop color='white' />,
        'A7' : <Knight color='white' />,
        'A8' : <Rook color='white' />,
        'G1' : <Pawn color='black' />,
        'G2' : <Pawn color='black' />,
        'G3' : <Pawn color='black' />,
        'G4' : <Pawn color='black' />,
        'G5' : <Pawn color='black' />,
        'G6' : <Pawn color='black' />,
        'G7' : <Pawn color='black' />,
        'G8' : <Pawn color='black' />,
        'H1' : <Rook color='black' />,
        'H2' : <Knight color='black' />,
        'H3' : <Bishop color='black' />,
        'H4' : <Queen color='black' />,
        'H5' : <King color='black' />,
        'H6' : <Bishop color='black' />,
        'H7' : <Knight color='black' />,
      };
}