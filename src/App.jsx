import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, byvalue } from "./slice/counterSlice";
import {
  useGetProductbyCategoryQuery,
  useGetSortProductQuery,
} from "./slice/apiSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [incValue, setIncValue] = useState(0);
  const dispatch = useDispatch();

  const {
    data: category,
    error: categoryerror,
    isLoading: categoryloading,
  } = useGetProductbyCategoryQuery();
  const {
    data: smartphone,
    error: smartphoneerror,
    isLoading: loadingsmartphone,
  } = useGetSortProductQuery();

  console.log(dispatch, "dispatch");

  function handleOnchange(e) {
    const value = Number(e.target.value);
    setIncValue(value);
    console.log("incValue>>>>>>", incValue);
    dispatch();
  }

  return (
    <>
      <h2>i am your dad</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <input
        type="text"
        placeholder="write number"
        onChange={(e) => handleOnchange(e)}
      />
      <button onClick={() => dispatch(byvalue(incValue))}>
        inc count by value
      </button>

      {/* // data render */}
      {console.log(category, "apidata>>>>>><<<<<<<")}
      {categoryloading && <p>Loading...</p>}
      {categoryerror && <p>Error fetching data: {categoryerror.message}</p>}
      {category &&
        category.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Category: {product}</p>
          </div>
        ))}

      {console.log(smartphone, "smartphone")}
      {loadingsmartphone && <p>loading smartphone data ......</p>}
      {smartphoneerror && (
        <p>Error fetching data : {smartphoneerror.message}</p>
      )}
      {smartphone &&
        smartphone.products.map((daata, ind) => (
          <div key={ind}>
            <h2>SmartphoneData : {daata.title}</h2>
          </div>
        ))}
    </>
  );
}

export default App;
