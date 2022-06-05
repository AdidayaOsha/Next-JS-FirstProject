import React from "react";
import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]/",
      query: {
        id: "max",
        clientprojectid: "projecta",
      },
    });
  }

  return (
    <div>
      <h1>The Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
