export function DecrementButton({ fn }: { fn: () => void }) {
  return (
    <div>
      <button onClick={fn}>decrement</button>
    </div>
  );
}