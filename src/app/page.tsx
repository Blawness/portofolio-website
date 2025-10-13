"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Soft light beams */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 right-[-10%] h-[60vh] w-[60vw] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(closest-side, rgba(118,173,225,0.35), rgba(3,18,36,0))" }} />
        <div className="absolute bottom-0 left-[-10%] h-[40vh] w-[50vw] rounded-full blur-3xl opacity-25"
             style={{ background: "radial-gradient(closest-side, rgba(47,107,173,0.35), rgba(3,18,36,0))" }} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-orcablue-100 backdrop-blur-md"
        >
          <span className="i-lucide-waves h-4 w-4" aria-hidden />
          Vorca Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="text-balance bg-gradient-to-b from-white to-orcablue-200 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl"
        >
          Elegance beneath the surface
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-2xl text-pretty text-base text-orcablue-100/90 sm:text-lg"
        >
          We craft sleek, ocean-inspired web experiences for ambitious brands and products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-4 flex flex-col gap-3 sm:flex-row"
        >
          <Button size="lg" className="bg-orcablue-500 hover:bg-orcablue-400 text-white">
            View work
          </Button>
          <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-orcablue-100 hover:bg-white/10">
            Contact us
          </Button>
        </motion.div>
      </div>

      {/* Orca silhouette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] flex justify-center opacity-20" aria-hidden>
        <img src="/orca.svg" alt="Orca silhouette" className="h-[200px] w-auto" />
      </div>
    </section>
  );
}
