import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white"
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert" active>
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div> 사용자를 선택해주세요. </div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
