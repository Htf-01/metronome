import Display from "../Components/Display";
import Controls from "./Controls";
import { useState, useEffect, useRef } from "react";

function Metronome() {
    
    // Set Upper/lower boundaries for Metronome BPM
    const upperBoundary = Number(220)
    const lowerBoundary = Number(40)
    // Set beats per bar
    const beatsPerBar = 4
    // Audio
    const click1 = new Audio('https://daveceddia.com/freebies/react-metronome/click2.wav')
    const click2 = new Audio('https://daveceddia.com/freebies/react-metronome/click1.wav')
    // States
    const [playing, setPlaying] = useState(false);
    const [beatCount, setBeatCount] = useState(0);
    const [bpm, setBPM] = useState(100);
    const timer = useRef()
    //Set Timer Comparison for self correction
    // const [startTime, setStartTime] = useState()
    // const [drift, setDrift] = useState(0)


    const handleCount = () => {
        setBeatCount(beatCount => beatCount === beatsPerBar ? 1 : beatCount + 1);
        (beatCount % beatsPerBar === 0) ?
        click1.play() :
        click2.play()
        // console.log(Date.now()-(startTime));    
    }

    useEffect(() => {
        // setStartTime(Date.now())
        clearInterval(timer.current);
        if (playing) {
            timer.current = setInterval(handleCount,((60/bpm)*1000))}
        },[bpm, playing, handleCount])

    const handleStartStop = () => {
        if (playing === false) 
        {setBeatCount(0);}
        setPlaying(!playing)}

    function incrementBPM () {
        setBPM(bpm => bpm >= upperBoundary ? upperBoundary : bpm + 1)}

    function decrementBPM () {
        setBPM(bpm => bpm <= lowerBoundary ? lowerBoundary : bpm - 1)}

    return ( 
        <>
        <Display 
        bpm={bpm}
        beatCount={beatCount} 
        />
        
        <Controls 
        bpm={bpm} 
        playing={playing} 
        handleStartStop={handleStartStop} 
        incrementBPM={incrementBPM}
        decrementBPM={decrementBPM}
        handleCount={handleCount}
        />
        </>);
}

export default Metronome;