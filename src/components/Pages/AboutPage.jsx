import React from "react";
import About from "../Contents/About";
import Transition from "../UI/Transition";

const AboutPage = React.memo(

  () => {
    return (
      <Transition>
        <About />
      </Transition>
    );
  }
);

export default AboutPage;
