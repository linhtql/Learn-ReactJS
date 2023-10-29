import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  //   return (
  //     <>
  //       {data &&
  //         data.map((item) => {
  //           return <p key={item.id}>{item.title}</p>;
  //         })}
  //     </>
  //   );

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;
