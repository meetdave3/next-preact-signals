import { computed, signal } from "@preact/signals";

export function countState() {
  const count = signal(0);

  const increment = () => {
    // A signal is updated by assigning to the `.value` property:
    count.value++;
  }
  
  const decrement = () => {
    // A signal is updated by assigning to the `.value` property:
    count.value--;
  }

  return { count, increment, decrement }
}