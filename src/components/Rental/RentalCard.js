


import React,{useEffect } from 'react';

const generateColor  = () => {
  return '#'+ (Math.random() * 0xFFFFFF<<0).toString(16);
}


// It will get only re-rendered when props are changed ny using React.memo
const CounterView = (props) => {

 const{ countValue, handleIncrement } = props;
 useEffect(() => {
  console.log('Callng UseEffect from Counter View')
})

 return(
  <div style ={{background: generateColor()}}>
    <h2 className="value">{countValue}</h2>
    <button onClick={handleIncrement(2)}>Increment</button>
    <button onClick={handleIncrement(-4)}>decrement</button>
  </div>
 

  )

}

export default React.memo(CounterView); 