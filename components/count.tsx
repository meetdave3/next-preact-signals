import { Signal } from "@preact/signals";

export function Count({ count }: { count: Signal<number> }) {
  return (
    <div>
      <h1>{count.value}</h1>
    </div>
  );
}
