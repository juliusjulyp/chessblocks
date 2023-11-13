import React from 'react';
import './chessboard.css';

const verticalAxis = ["1","2","3","4","5","6","7","8"];
const horizontlAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard(){
    let board = [];
    for(let j = verticalAxis.length - 1; j >= 0; j--){
    for(let i = 0; i < horizontlAxis.length; i++){
        const number = j + i + 2;
        if(number % 2 === 0 ){
            board.push(<div className='tile black-tile'>{horizontlAxis[i]} {verticalAxis[j]}</div>)

        }else{
            board.push(<div className='tile white-tile'>{horizontlAxis[i]} {verticalAxis[j]}</div>)

        }
        }
    }
    return(
        <div id = "chessboard">{board}</div>
    
    );
}