function Controls({
    playing,
    handleStartStop,
    incrementBPM,
    decrementBPM,
    handleCount
    }) {

    function handleIncrement () {
        incrementBPM()
    }
    
    function handleDecrement () {
        decrementBPM()
    }

    function handleDecrementFive () {
        for (let i=0;i<5;i++) {
            decrementBPM()
        }}
    
    function handleIncrementFive () {
        for (let i=0;i<5;i++) {
            incrementBPM()
        }}

    




    
    
    return ( 
        <>
        <div>
            <button onClick={handleDecrementFive}>Decrement -5</button>  
            <button onClick={handleDecrement}>Decrement</button>  
            <button onClick={handleIncrement}>Increment</button>  
            <button onClick={handleIncrementFive}>Increment +5</button>  
            <button onClick={handleCount}>Beat</button>  
        </div>
        <button onClick={handleStartStop}>{playing ? 'Stop' : 'Start'}</button>
        </>
     );
}

export default Controls;