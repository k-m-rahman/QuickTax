import React from "react";
import useTitle from "../../hooks/useTitle";
import JsVsNodeJs from "./JsVsNodeJs/JsVsNodeJs";
import Jwt from "./Jwt/Jwt";
import NodeJs from "./NodeJs/NodeJs";
import SqlVsNoSql from "./SqlVsNoSql/SqlVsNoSql";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div>
      <h3 className="text-4xl text-center md:text-5xl dark:text-white capitalize font-bold  w-fit mx-auto p-2 rounded">
        Blogs
      </h3>
      <SqlVsNoSql></SqlVsNoSql>
      <Jwt></Jwt>
      <JsVsNodeJs></JsVsNodeJs>
      <NodeJs></NodeJs>
    </div>
  );
};

export default Blogs;
