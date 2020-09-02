import React from "react";
import UseAnimations from "react-useanimations";
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import github from "react-useanimations/lib/github";

function App() {
  return <UseAnimations animation={github} size={60} strokeColor="#24292E" />;
}

export default App;
