import axios from "axios";
import React, { useEffect, useState } from "react";

const ResourceList = ({ resourceType }) => {
  console.log("type", resourceType);
  const [resourceList, setResourceList] = useState([]);

  const fetchResource = async (resourceType) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );
    setResourceList(data);
  };

  console.log(resourceList, "ReList");
  useEffect(() => {
    if (resourceType) {
      fetchResource(resourceType);
    }
  }, [resourceType]);

  return (
    <div>
      <h1>{resourceType}</h1>
      <div>
        {resourceList.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
