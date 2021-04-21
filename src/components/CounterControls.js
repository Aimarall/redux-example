import { useDispatch } from "react-redux";


const CounterControls = () =>{
    const dispatch = useDispatch();
    function incrementBy1Callback(){
        dispatch({type: "increment_by_1"});
    }
    function incrementBy10Callback() {
        dispatch({type: "increment_by_10"});
    }
    function incrementBy10Callback() {
        dispatch({type: "increment_by_10"});
    }
    function incrementBy10Callback() {
        dispatch({type: "increment_by_10"});
    }
    function incrementBy10Callback() {
        dispatch({type: "increment_by_10"});
    }

    return(
        <div>
            <button onClick={incrementBy1Callback}>+1</button>
            <button  onClick={incrementBy10Callback}>+10</button>
            <button  onClick={incrementBy10Callback}>-10</button>

            <button  onClick={incrementBy10Callback}>*10</button>
            <button  onClick={incrementBy10Callback}>/10</button>

            <button  onClick={incrementBy10Callback}>-</button>
            <button  onClick={incrementBy10Callback}>+</button>
        </div>
    );
}
export default CounterControls;