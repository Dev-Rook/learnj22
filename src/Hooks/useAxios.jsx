import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAPIData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
      console.log("Result:");
      console.log(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getAPIData();
  }, [getAPIData]);

  return { data, loading, error };
};

export default useAxios;
