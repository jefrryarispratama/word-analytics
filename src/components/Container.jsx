import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numbersOfCharacter: text.length,
    numberOfWords: text.split(/\s/).filter((word) => {
      return word !== "";
    }).length,
    instagramCharacterLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharacterLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
