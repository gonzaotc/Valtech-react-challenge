import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { CartContext } from "./CartContext";

function MainApp() {
  return (
    <>
      {/* Acá voy a insertar el cartContext provider */}
      <AppRouter />
    </>
  );
}

export default MainApp;
