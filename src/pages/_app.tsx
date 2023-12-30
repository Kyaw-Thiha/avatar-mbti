import { type AppType } from "next/app";

import { api } from "@/utils/api";
import { AnimatePresence } from "framer-motion";

import "@/styles/globals.css";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
};

export default api.withTRPC(MyApp);
