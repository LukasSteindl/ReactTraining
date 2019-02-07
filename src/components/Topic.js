import React from "react";

const Topic = ({ match }) => (
  <div>
    <h1>{match.params.topicId}</h1>
  </div>
);

export default Topic;
