import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";
import { useSelector, useDispatch } from 'react-redux'
import { updateTotal } from "./features/basketSlice";

function App() {
  const {products} = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])
  
  return (
    <>
    <Navbar />
      <h1 className="text-center text-3xl font-medium mt-2 py-4">
        12 - Redux Store
      </h1>
      <BasketProducts />
    </>
  );
}

export default App;
