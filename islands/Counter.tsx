import type { Signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialCount = parseInt(params.get("count") || "0", 10);
    props.count.value = initialCount;
  }, []);

  return (
    <div class="flex gap-8 py-6">
      <Button
        onClick={() => {
          props.count.value -= 1;
          // will change querystring
          history.pushState(null, "", `?count=${props.count.value}`);
        }}
      >
        -1
      </Button>
      <p class="text-3xl tabular-nums w-24 text-center">{props.count}</p>
      <Button
        onClick={() => {
          props.count.value += 1;
          // will change querystring
          history.pushState(null, "", `?count=${props.count.value}`);
        }}
      >
        +1
      </Button>
    </div>
  );
}
