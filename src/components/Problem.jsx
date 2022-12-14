import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";

function Problem(props) {
  const [hasSolved, setHasSolved] = useState(false);

  function checkSolved() {
    let url = props.data.problemURL;
    for (let i = 0; i < props.userSolved.length; i++) {
      const newURL = props.userSolved[i];
      if (url == newURL) {
        setHasSolved(true);
        console.log(props.data.problemName);
      }
    }
  }

  useEffect(() => {
    checkSolved();
  }, [props.userSolved]);

  return (
    <>
      <div
        className={`mockup-code w-80 shadow-2xl  overflow-hidden m-6 ${
          hasSolved ? "bg-teal-900" : ""
        }`}
      >
        <pre data-prefix="$">
          <code className={`${hasSolved ? "text-white" : ""}`}>
            {props.data.problemName}
          </code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Rating : {props.data.problemRating}</code>
        </pre>
        <pre data-prefix=">" className="text-pink-600">
          <code>{`${props.data.userSolved} Users Solved`}</code>
        </pre>

        <a
          href={props.data.problemURL}
          className=" flex justify-end "
          target="_blank"
        >
          <button className={`btn  mx-6 ${hasSolved ? "bg" : "btn-success"}`}>
            {hasSolved ? "Solve Again" : "Solve"}
          </button>
        </a>
      </div>
    </>
  );
}

export default Problem;
