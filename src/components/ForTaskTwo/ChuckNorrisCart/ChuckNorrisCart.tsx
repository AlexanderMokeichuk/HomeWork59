import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Joke} from "../../../type.s";

interface Props {
  dataFromServer: Joke;
}
const ChuckNorrisCart: React.FC<Props> = React.memo(({dataFromServer}) => {
  return (
    <div className={"bg-body-secondary col-12 p-2 mt-5"} style={{borderLeft: "12px solid gray", width: 500}}>
      {dataFromServer.joke}
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps === prevProps && nextProps.dataFromServer === nextProps.dataFromServer;
});

export default ChuckNorrisCart;