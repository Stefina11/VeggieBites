import React, { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetData = () => {
    setData([]);
    setLoading(false);
    setError(null);
  };

  const fetchData = async (input) => {
    const apiKey = "6f46f2bf7549445b8f73083648f092ae";
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${input}&number=50`,
      );
      if (!response.ok) throw new Error("fetch error");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <searchContext.Provider value={{ data, loading, error, fetchData, resetData }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearchApi = () => {
  return useContext(searchContext);
};
