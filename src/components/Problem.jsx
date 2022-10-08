import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";

function Problem(props) {
  const [hasSolved, setHasSolved] = useState(false);


  function checkSolved() {
    let url = props.data.problemURL;
    for (let i = 0; i < props.userSolved.length; i++) {
      const newURL = (props.userSolved[i]);
      if (url == newURL) {
        setHasSolved(true);
        console.log(props.data.problemName);
      }
    }
  }

  useEffect(() => {
    checkSolved();
    // console.log(props.userSolved)
  }, [props.userSolved]);

  return (
    <>
      <div className="mockup-code w-80 overflow-hidden m-6 ">
        <pre data-prefix="$">
          <code>{props.data.problemName}</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Rating : {props.data.problemRating}</code>
        </pre>
        <pre data-prefix=">" className="text-red-600">
          <code>Done!</code>
        </pre>

        <a href={props.data.problemURL} className=" flex justify-end ">
          <button className="btn btn-success mx-6">
            {hasSolved ? "Solve Again" : "Solve"}
          </button>
        </a>
      </div>
    </>
  );
}

export default Problem;
