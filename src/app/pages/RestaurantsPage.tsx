import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../components/UI/button/Button";
import AnimatePage from "../utils/AnimatePage";
function RestaurantsPage() {
  return (
    <AnimatePage>
      <Button>RESTAURANTS</Button>
    </AnimatePage>
  );
}

export default RestaurantsPage;
