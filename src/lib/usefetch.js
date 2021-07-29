import { useState, useEffect } from "react";

// fetch GET using state
export function useFetch(uri, type = "GET", formData = {}) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect prevents fetching data everytime react rerenders
  useEffect(() => {
    if (!uri) return;
    if(type === "GET") {
      fetch(uri)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
      }
    }, [uri]);

  return {
    loading,
    data,
    error
  };
}

export async function fetchPost(uri, data) {

  try {
    const response = await fetch(uri, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
    }})
    const returnedData = await response.json();
    return returnedData;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDelete(uri, id) {
  try {
    const response = await fetch(uri + id, {
      method: "DELETE",
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}
