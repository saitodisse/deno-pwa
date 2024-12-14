import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

// get initial value from querystring (Deno, Fresh) on server
interface Data {
  query: string;
}
export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("count") || "";
    return ctx.render({ query });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const count = useSignal(data.query ? parseInt(data.query, 10) : 0);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Fresh : Deno</h1>
        <p class="my-4">
          Preserva último numero pela querystring
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
