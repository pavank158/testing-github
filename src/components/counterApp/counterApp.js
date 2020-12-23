



import React,{ useState,useEffect, useCallback} from 'react';
import CounterView from './CounterView'
import PropTypes from 'prop-types';
import './CounterApp.css';


const functions = new Set();
const CounterApp = (props) => {
    const [ count, setCount] = useState(0);
    const [ whatever, setWhatever] = useState(10);

    const { title }= props;

    useEffect(() => {
        console.log('CALLING USE EFFECT')
    }, [])

    // const increment =() => {
    //     alert('incrementing');
    // }
    // const decrement =() => {
    //     alert('decrementing');
    // }

    // const increment = (step) => () => setCount(count + step)
    // const doWhatever = () => setWhatever(whatever + 1);
    const increment = useCallback((step) => () => setCount(count + step), [count])
    const doWhatever = useCallback(() => setWhatever(whatever + 1), [whatever])
  
    functions.add(increment);
    functions.add(doWhatever);


    return(
        <div>
            <div className="counter-app">
                <h1>{title}</h1>
                < CounterView
                countValue={count}
                handleIncrement={increment}
                />
                <button onClick={doWhatever}>Do Whatever</button>
                <h1>Functions: {functions.size}</h1>
            </div>
        </div>
            
        )
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired
}




// class CounterApp extends React.Component{
//     constructor(){
//         super();
//         // this.increment = this.increment.bind(this);
//         // this.decrement = this.decrement.bind(this);
//         this.state = {
//             count: 0
//         }
//     }



//     // state = {
//     //     count: 0
//     // }
//     // componentDidMount(){
//     //     alert('component did mount Called');
//     // }
    
//     // componentDidUpdate(){
//     //     alert('component did Update Called');
//     // }


//     increment = (step) => {
//         this.setState({
//             count: this.state.count + step
//         })

//     }
//     // decrement = () => {
//     //     this.setState({
//     //         count: this.state.count -1
//     //     })
//     // }
// // LifeCycle function
//     render(){
//         // alert('Render called');
//         const {count} = this.state;
//         // const count = this.state.count

//         const { title } = this.props;
//         return(
//             <div>
//                 <div className="counter-app">
//                     <h1>{ title }</h1>
//                     <h2 className="value">{count}</h2>
//                     <button onClick={() => this.increment(1)}>Increment</button>
//                     <button onClick={() => this.increment(-1)}>decrement</button>
//                     {/* <button onClick={this.increment}>Increment</button>
//                     <button onClick={this.decrement}>decrement</button> */}
//                     {/*<button onClick={() => this.increment()}>Increment</button>
//                     <button onClick={() => this.decrement()}>decrement</button> */}
//                 </div>
//             </div>

//         )
//     }
// }

export default CounterApp;
