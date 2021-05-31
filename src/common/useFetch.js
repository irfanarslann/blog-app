import { useState, useEffect } from "react";

const useFetch = (url) => {
  // States
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //States end

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error while fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if ((err.name = "AbortError")) {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => {};
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
