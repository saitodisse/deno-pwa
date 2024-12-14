import { type PageProps } from "$fresh/server.ts";
import LoadSw from "../islands/LoadSw.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>deno-pwa</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
        <LoadSw />
      </body>
    </html>
  );
}
