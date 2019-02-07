import React from "react";
import { Link, Route } from "react-router-dom";
import Topic from "./Topic";
const Topics = ({ match }) => (
  <div>
    <Link to={`${match.url}/rendering`}>Rendering</Link>
    <Link to={`${match.url}/somethingelse`}>Something else</Link>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      path={`${match.url}`}
      exact={true}
      render={() => {
        return <div>default topic</div>;
      }}
    />
  </div>
);

export default Topics;
