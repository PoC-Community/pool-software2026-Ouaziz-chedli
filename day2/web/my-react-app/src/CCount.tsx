//   const [count, setCount] = useState(0);

interface CountProps {
  Count: number;
  SetCount: React.Dispatch<React.SetStateAction<number>>;
}

export function Count({ Count, SetCount }: CountProps) {
  return (
    <>
      <section className="Count-section">
        <p>Count: {Count}</p>
        <button className="Count-button" onClick={() => SetCount(Count + 1)}>
          Increment
        </button>
      </section>
    </>
  );
}
