import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   // <Profile
//   //   avatar={user.avatar}
//   //   username={user.username}
//   //   tag={user.tag}
//   //   location={user.location}
//   //   stats={user.stats}
//   // />,
//   data.map((dat) => <Statistic title="Upload stats" stats={dat} />),
//   document.querySelector("#root")
// );
// ReactDOM.render(elements, document.querySelector("#root"));
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <div>
//     {" "}
//     <Profile
//       avatar={user.avatar}
//       username={user.username}
//       tag={user.tag}
//       location={user.location}
//       stats={user.stats}
//     />
//     <Statistic title stats={data} />
//   </div>,

//   document.querySelector("#root")
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   data.map((el) => (
//     <StatisticValue id={el.id} percentage={el.percentage} label={el.label} />
//   )),
//   document.querySelector("#root")
// );
