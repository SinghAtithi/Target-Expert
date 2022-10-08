import React, { useState } from "react";
import axios from "axios";

function InputField(props) {
  const [solved, setSolved] = useState(false);

  function createURL(conestId, problemIndex) {
    return `https://codeforces.com/problemset/problem/${conestId}/${problemIndex}`;
  }

  const updateData = () => {
    props.setUserSolved([]);
    axios
      .get(`https://codeforces.com/api/user.status?handle=${props.userName}`)
      .then((res) => {
        let data = res.data.result;
        for (let i = 0; i < data.length; i++) {
          if (data[i].verdict === "OK") {
            let problem = data[i].problem;
            let url = createURL(problem.contestId, problem.index);
            props.setUserSolved((prev) => {
              return [...prev, url];
            });
          }
        }
      });
    // console.log(props.userSolved);
    console.log(props.userName);
  };

  return (
    <div className="flex justify-center m-10 ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full max-w-xs mx-12"
        onChange={(e) => props.setUserName(e.target.value)}
      />
      <button className="btn btn-outline btn-success" onClick={updateData}>
        GO TO THE{" "}
      </button>
    </div>
  );
}

export default InputField;
