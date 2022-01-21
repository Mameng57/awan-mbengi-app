import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import Styles from "./Styles/Home.module.css";

const Home = (props) => {

  const todaySpecials = (specials) => specials.map(
    (special) => (<Tile key={special.id} special={special} />)
  );

  return (
    <div className={Styles.home}>
      <div className={Styles.intro}>
        <div className={Styles.intro__element}>
          <div className={Styles.image} />
        </div>
        <div className={Styles.intro__element}>
          <p className={Styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque voluptatem modi eligendi velit obcaecati,
            labore autem molestias nemo, consectetur itaque est quos praesentium nulla dolores, quo quisquam repudiandae 
            nobis accusamus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsum debitis exercitationem tempora unde
            perferendis cum laudantium necessitatibus libero doloremque, et aut velit, cumque ipsam! Temporibus fugit
            facere quae sint.
          </p>
        </div>
      </div>
      <div className={Styles.special}>
        <h1 className={Styles.special__heading}>Today's special</h1>
        <div className={Styles.special__menus}>
          <div> {
            todaySpecials(props.specials.leftSide)
          }
          </div>
          <div> {
            todaySpecials(props.specials.rightSide)
          }
          </div>
        </div>
        <div className={Styles.special__footer}>
          <h3><i>"It's not talk about taste, but soul"</i></h3>
          <h3>Come join us and hang out at <span>Awan Mbengi</span></h3>
        </div>
        <Link to="/order">
          <Button>PESAN</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
