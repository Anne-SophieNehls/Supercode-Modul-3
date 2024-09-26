import { useState } from "react";

function Spoiler(props: any) {
  const [hidden, setHidden] = useState(true);

  const toggleSpoiler = () => {
    setHidden(!hidden);
  };

  if (hidden) {
    return <span onClick={toggleSpoiler}>XXX</span>;
  } else {
    return <span onClick={toggleSpoiler}>{props.children}</span>;
  }
}

export default Spoiler;
