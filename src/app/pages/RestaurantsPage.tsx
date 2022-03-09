import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../components/UI/button/Button";
import PageAnimator from "../utils/PageAnimator";
function RestaurantsPage() {
  return (
    <PageAnimator>
      <Button>RESTAURANTS</Button>
    </PageAnimator>
  );
}

export default RestaurantsPage;
