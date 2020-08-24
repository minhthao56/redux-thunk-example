import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "./redux/actions";

import "./App.css";

function App() {
  const CallAip = useSelector((state) => state.CallAip);
  const dispatch = useDispatch();

  console.log(CallAip);
  useEffect(() => {
    dispatch(exampleAction());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Call api</h1>
      <h2>{CallAip.node_id}</h2>
    </div>
  );
}

export default App;
