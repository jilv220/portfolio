import { useState, useEffect } from "react";

type FetchStatus = "idle" | "fetching" | "success" | "error";

const cache = new Map<string, unknown[]>();
export const useFetch = (url: string) => {
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [data, setData] = useState<unknown[]>([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      if (cache.has(url)) {
        console.log("hmm...");
        const data = cache.get(url);
        if (data) {
          setData(data);
          setStatus("success");
        }
      } else {
        const response = await fetch(url).catch(() => {
          setStatus("error");
          return undefined;
        });

        if (!response || !response.ok) {
          setStatus("error");
          return;
        }
        const data = await response.json();
        cache.set(url, data);
        setData(data);
        setStatus("success");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { status, data };
};

export function invalidateCache(url: string) {
  cache.delete(url);
}
