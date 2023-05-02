import React, { useEffect, useState } from "react";
import ResourceList from "./ResourceList";
import Button from "../resuable/Button";

const Todo = () => {
  const [resourceType, setResourceType] = useState("");
  useEffect(() => {
    console.log("render");
  }, [resourceType]);
  return (
    <React.Fragment>
      <div>
        <Button title="Todo" onClick={() => setResourceType("todos")} />
        <Button title="Post" onClick={() => setResourceType("posts")} />
      </div>
      <ResourceList resourceType={resourceType} />
    </React.Fragment>
  );
};

export default Todo;
