import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MBTISelector } from "@/components/mbti-selector";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [buttonEnlarged, setButtonEnlarged] = useState(false);
  const [personality, setPersonality] = useState("");

  return (
    <>
      <Head>
        <title>What's Your MBTI?</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen overflow-hidden">
        <img
          className="absolute left-0 top-0 -z-50 h-full w-full object-cover"
          src="/hero.jpg"
          alt="Hero Image"
        />

        {/* Video Background */}
        {/* 
        <video
          className="absolute left-0 top-0 -z-50 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <div className="z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold text-secondary">MBTI</h1>
            <div className="flex gap-4">
              <MBTISelector value={personality} setValue={setPersonality} />
              <AnimatePresence mode="wait">
                {!buttonEnlarged && (
                  <motion.div
                    initial={{ scale: 30 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 30 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    whileHover={{
                      scale: 0.95,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md bg-primary"
                    onClick={() => {
                      setButtonEnlarged(true);
                      setTimeout(
                        () => void router.push(`/mbti/${personality}`),
                        800,
                      );
                    }}
                  >
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className="h-10 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                    >
                      Confirm
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
