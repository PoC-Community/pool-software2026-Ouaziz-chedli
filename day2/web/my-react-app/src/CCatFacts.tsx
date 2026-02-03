// curl -X 'GET' \
//   'https://catfact.ninja/facts?max_length=1&limit=1' \
//   -H 'accept: application/json' \
//   -H 'X-CSRF-TOKEN: 21YdcpO8I8i4YYH7xgcGZTnw7kS5LU56kiZmLrZ1'

import { useEffect, useState } from "react";

export interface CatFact {
  fact: string;
  length: number;
}

export async function fetchCatFact(): Promise<CatFact[]> {
  const response = await fetch("https://catfact.ninja/facts?limit=10", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cat fact");
  }

  const data = await response.json();
  console.log("API Response:", data);
  return data.data as CatFact[];
}

interface CatFactCardProps {
  index: number;
  fact: CatFact;
}

export function CatFactCard({ index, fact }: CatFactCardProps) {
  return (
    <div className="cat-fact-card">
      <p>Fact number : {index}</p>
      <p>{fact.fact}</p>
    </div>
  );
}

export function CatFacts() {
  const [catFacts, setCatFacts] = useState<CatFact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCatFact()
      .then((facts) => {
        setCatFacts(facts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
        <h2>Cat Facts</h2>
      <section className="cat-facts-section">
        {loading && <p>Loading cat facts...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          catFacts.map((fact, index) => (
            <CatFactCard key={index} index={index} fact={fact} />
          ))}
      </section>
    </>
  );
}
