import React from "react";
import HeaderCover from "../UI/HeaderCover";
import Home from "../Contents/Home";
import Transition from "../UI/Transition";

const HomePage = React.memo(

  (props) => {
    return (
      <Transition>
        <HeaderCover image="a" />
        <Home specials={props.specials} />
      </Transition>
    );
  }
);

export default HomePage;
