/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".net", ".com", ".us", ".io", ".gov"];
  for (let ii of pronoun)
    for (let jj of adj)
      for (let kk of noun)
        for (let ll of dom)
          document.getElementById("list").innerHTML +=
            "<li>" + ii + jj + kk + ll + "</li>";
};
