import React from "react";
import "./index.css";
import user from "../src/Profile/user.json";
import Profile from "../src/Profile/Profile";
import data from ".//Statistics/data.json";
import Statistic from "./Statistics/Statistic";
import friends from "../src/FriendList/friends.json";
import Friends from "../src/FriendList/Friends";
import transactions from "./Transactions/transactions.json";
import Transactions from "./Transactions/Transactions";

export const App = () => {
  return (
    <section>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title stats={data} />
      <Friends data={friends} />
      <Transactions data={transactions} />
    </section>
  );
};
