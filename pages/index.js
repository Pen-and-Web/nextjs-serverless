import Link from "next/link";
import https from "axios";
import React, { useEffect, useState } from "react";

export default function IndexPage() {
  const [user, setUser] = useState("abcd");
  const [dataFromApi, setDataFromApi] = useState(user);

  useEffect(() => {
    async function populate() {
      const data = await https.get("api/hello");

      setUser(data.data);
    }
    populate();
  });
  const handleClick = () => {
    setDataFromApi(user);
  }

  console.log(user);
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <br/>
      <button onClick={handleClick}>Show data from Api</button>
      <hr/>
      {dataFromApi}
    </div>
  );
}
