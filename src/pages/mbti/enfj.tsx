import Head from "next/head";
import { motion, useScroll } from "framer-motion";

import { Button } from "@/components/ui/button";

export default function Example() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Head>
        <title>ENFJ</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen bg-primary">
        <div className="flex h-[95vh] items-center justify-center">
          <motion.img
            src="jake-sully.webp"
            alt="Jake Sully"
            className="h-full max-w-full"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}

            // style={{ opacity: 1 - (scrollYProgress as unknown as number) }}
          />
        </div>

        <motion.div
          initial={{ y: 100 }}
          animate={{
            y: -100,
            transition: {
              duration: 1,
              type: "spring",
              delay: 0.2,
              bounce: 0.4,
            },
          }}
          exit={{ y: 100 }}
          className="min-h-40 w-full rounded-t-full border-t-4 border-secondary bg-primary py-4 text-center text-primary-foreground"
        >
          <h1 className="text-5xl font-medium">Jake Sully</h1>
          <h2 className="mt-4 text-xl text-secondary-foreground">ENFJ</h2>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: -100, transition: { duration: 0.5, delay: 0.2 } }}
          exit={{ y: 100 }}
          className="min-h-40 min-h-[1024px] bg-primary px-4 py-4 md:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="rounded-2xl bg-secondary p-4"
          >
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="text-xl font-medium text-primary-foreground"
            >
              The Protagonist
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="mt-4 text-primary-foreground"
            >
              The INFJ protagonist, often referred to as "The Advocate," is a
              compassionate and insightful individual driven by a deep sense of
              purpose. They possess a unique blend of intuition and empathy,
              making them highly attuned to the emotions and needs of those
              around them. With an innate ability to understand complex human
              dynamics, INFJ protagonists often find themselves drawn to helping
              others and making a positive impact on the world. Their creativity
              and vision are accompanied by a strong sense of idealism,
              motivating them to pursue meaningful goals and envision a better
              future. Although reserved, INFJ protagonists build strong and
              genuine connections with a select few, valuing deep, authentic
              relationships. Despite their gentle exterior, they possess a quiet
              strength and determination, willing to navigate challenges to
              uphold their values and bring about positive change. In the face
              of adversity, INFJ protagonists may grapple with their own
              internal struggles, but their resilience and commitment to their
              convictions drive them forward. Often found championing causes or
              championing the underprivileged, the INFJ protagonist embodies a
              unique blend of warmth, wisdom, and a relentless pursuit of a
              better world.
            </motion.p>
          </motion.div>

          <div className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="text-xl font-medium text-primary-foreground"
            >
              Why is Jake Sully a Protagonist
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="mt-4 text-primary-foreground"
            >
              In the film, Jake Sully demonstrates a profound sense of empathy
              and intuition, key characteristics of an INFJ. His ability to
              connect with the Na'vi on a deep emotional level goes beyond mere
              observation; he truly understands and resonates with their values
              and way of life. This intuitive connection becomes the driving
              force behind his decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="mt-4 text-primary-foreground"
            >
              As an INFJ, Jake is guided by a strong moral compass and a vision
              for a harmonious coexistence between humans and the Na'vi. Despite
              external pressures and conflicting interests, he consistently
              chooses paths that align with his ideals of understanding,
              cooperation, and respect for the environment. His commitment to
              these values is evident in his pivotal decision to stand against
              the destructive actions of some humans, even when it puts him at
              odds with his own kind.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="mt-4 text-primary-foreground"
            >
              Jake's internal struggles and moments of introspection further
              reflect INFJ traits. His deep reflections on identity, belonging,
              and the consequences of his choices showcase the complex inner
              world that characterizes this personality type.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="mt-4 text-primary-foreground"
            >
              In summary, by attributing an INFJ personality to Jake Sully, we
              highlight his empathetic nature, intuitive understanding,
              commitment to values, and a vision for a better, more harmonious
              world – all of which align with the core characteristics of the
              INFJ type.
            </motion.p>
          </div>
        </motion.div>
      </main>
    </>
  );
}
