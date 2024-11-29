// src/hooks/useUser.ts
import { useEffect, useState } from "react";

// interface User {
//   name: string;
//   // Add any other user properties you expect here
// }

export default function useData(fn: any) {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await fn()
        setData(fetchedUser);
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error("Error fetching user:", err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
}
