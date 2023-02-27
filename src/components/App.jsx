import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        ph="+123 456 789"
        mail="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        ph="+987 654 321"
        mail="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        ph="+918 372 574"
        mail="gmail@chucknorris.com"
      />
    </div>
  );
}

export default App;
