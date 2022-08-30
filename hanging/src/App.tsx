
import { useEffect, useState } from 'react';
import './App.css'
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

function App() {

  const [ word ] = useState ('COMPUTADORA');
  const [ hiddenWord, setHiddenWord ] = useState ('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose] = useState ( false );

// Determinar si la persona perdio
  useEffect ( () => {
    if ( attempts >= 9) {

      setLose( true );
    }

  },[attempts]);

  const checkLetter = (letter: string) => {
  if ( !word.includes(letter)){
    setAttempts( Math.min (attempts + 1, 9) );
    return;
  } 

  const hiddenWordArray = hiddenWord.split(' ');
  console.log(hiddenWordArray);
  for (let i = 0; i < word.length; i++) {
    if ( word [i] === letter) {
      hiddenWordArray[i] = letter;

    }
  }
    setHiddenWord ( hiddenWordArray.join(' ') );
  } 

  return ( <div className="App">
             
             {/* imagenes */}
            <HangImage imageNumber={ attempts }/>

             {/* palabra oculata */}
             <h3> {hiddenWord} </h3>

             {/* intentos */}
             <h3>Intentos: { attempts } </h3>

             {/* intentos*/}

             {/* Botones de letras */}
             {
              letters.map( (letter) => (
                <button 
                onClick= { () => checkLetter( letter )}
                key ={ letter }> 
                {letter}
                 </button>
              ))
             }
         </div> )
}

export default App
  