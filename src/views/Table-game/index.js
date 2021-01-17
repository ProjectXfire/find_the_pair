import "./index.css";
import React, { useState, useEffect } from "react";
import { GameHeader } from "../../components/game-header/index";
import { GameContent } from "../../components/game-content/index";
import { GameFooter } from "../../components/game-footer/index";
import axios from "axios";

export const TableGame = (props) => {

  const playername = props.location.state.name;
  const [state, setState] = useState({
    charState: [],
  })

  const [validatePair, setValidatePair] = useState({
    pairId: null,
    position: null,
    img: null
  })

  const [score, setScore] = useState({
    attempts: 0,
  })

  const [clickState, setClickState] = useState({
    click: true
  });

  function changeState(boolean, pos, id, img) {
    let updateCharState = [...state.charState];
    updateCharState[pos] = {
      flipped: boolean,
      id,
      img,
    }
    setState({
      charState: updateCharState,
    });
  }

  function handleFlip(pos, id, img) {
    if(validatePair.pairId !== null) {
      changeState(true, pos, id, img);
      if (state.charState[pos].id === validatePair.pairId) {
        setValidatePair({
          pairId: null,
          position: null,
          img: null
        })
        setScore({
          attempts: score.attempts + 1
        })
      } else {
        setClickState({
          click: false
        });
        setScore({
          attempts: score.attempts + 1
        })
        setTimeout(() => {
          changeState(false, pos, id, img);
          changeState(false, validatePair.position, validatePair.pairId, validatePair.img);
          console.log(id, validatePair.pairId);
          setValidatePair({
            pairId: null,
            position: null,
            img: null
          })
          setClickState({
            click: true
          });
        }, 1000)
      }
    } else {
      changeState(true, pos, id, img);
      setValidatePair({
        pairId: id,
        position: pos,
        img: img
      })
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(state.charState);

  const fetchData = async () => {
    const pageRamdom = Math.floor(Math.random()*34);
    const { data: { results } } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageRamdom}`);
    const duplicateData = results.concat(results);
    const shuffleData = duplicateData.sort(() => Math.random() - 0.5);
    let initialstate = [];

    for (let i=0; i < shuffleData.length; i++) {
      initialstate = initialstate.concat({
        flipped: false,
        id: shuffleData[i].id,
        img: shuffleData[i].image
      })
    }

    setState({
      charState: initialstate,
    });
    setScore({
      attempts: 0
    });
    setValidatePair({
      pairId: null,
      position: null,
      img: null
    });
  }

  return (
    <section className="Game">
      <GameHeader
        attempts={score.attempts}
        playername={playername}/>
      <GameContent
        characters={state.charState}
        handleFlip={handleFlip}
        click={clickState.click}
      />
      <GameFooter restartGame={fetchData}/>
    </section>
  )
}