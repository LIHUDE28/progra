
import { useEffect, useState } from 'react';
import './App.css'
import { HangImage } from './components/HangImage';
import { getRamdomWord } from './helpers/getRamdomWord';
import { letters } from './helpers/letters';

function App() {

  const [ word, setword ] = useState ( getRamdomWord() );
  const [ hiddenWord, setHiddenWord ] = useState ('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose] = useState ( false );
  const [ won, setWon ] = useState( false );

// Determinar si la persona perdio
  useEffect ( () => {
    if ( attempts >= 9) {

      setLose( true );
    }

  },[attempts]);

  //determinar si la persona ganó 
  useEffect( () => {
    const currrentHiddenWord = hiddenWord.split( " " ).join("");
    console.log(currrentHiddenWord);
    if ( currrentHiddenWord === word ){
      setWon( true );
    }
  }, [hiddenWord] )

  const checkLetter = (letter: string) => {
    if ( lose ) return;
    if ( won ) return;


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

  const newGame = () => {
    const newWord = getRamdomWord();
    setword(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon( false);
  }
  

  return ( <div className="App">
             
             {/* imagenes */}
            <HangImage imageNumber={ attempts }/>

             {/* palabra oculata */}
             <h3> {hiddenWord} </h3>

             {/* intentos */}
             <h3>Intentos: { attempts } </h3>

             {/* Mnesaje si perdió*/}
              {
                 ( lose )
                  ? <h2>Perdio { word }</h2> 
                  : ""
              }
            
              {/* Mnesaje si ganó*/}
              {
                 ( won )
                  ? <h2>Felicidades usted ganó</h2> 
                  : ""
              }

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

             <br /> <br />
             <button onClick={newGame}>¿Nuevo juego?</button>
         </div> )
}

export default App
  