export function IncrementButton({ fn }: { fn: () => void }) {
  return (
    <div>
      <button onClick={fn}>increment</button>
    </div>
  );
}
