import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppRouter } from "./api/trpc/[trpc]";
import { withTRPC } from "@trpc/next";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : `http://localhost:3000/api/trpc`;

    return {
      url,
    };
  },
  ssr: true,
})(MyApp);
