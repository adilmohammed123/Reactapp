import React from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  React.useEffect(() => {
    console.log(data, "datadata");
  }, [data]);

  if(isLoading) return <div>loading .....</div>
  
  return (
    <div className="App">
      <ul>
        {data.length
          ? data.map((item: any, index: number) => {
              return (
              <li>
                <img src={item.image} width={180} height={200}/>
                <p>{item.description}</p>
              </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default App;
