import React from "react";
import { Progress } from "reactstrap";
const ProgressBarView = () => {
  return (
    <div className="text-center">
      <Progress animated value={95} />
    </div>
  );
};

export default ProgressBarView;
