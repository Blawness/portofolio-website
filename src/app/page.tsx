import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getProjects, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[65vh] overflow-hidden">
        {/* Soft light beams */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -top-24 right-[-10%] h-[60vh] w-[60vw] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(118,173,225,0.35), rgba(3,18,36,0))",
            }}
          />
          <div
            className="absolute bottom-0 left-[-10%] h-[40vh] w-[50vw] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(closest-side, rgba(47,107,173,0.35), rgba(3,18,36,0))",
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 text-center sm:py-16">
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
            Web portfolio, crafted with depth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-2xl text-pretty text-base text-orcablue-100/90 sm:text-lg"
          >
            Explore selected web projects and case studies from Vorca Studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-orcablue-500 hover:bg-orcablue-400 text-white"
              onClick={scrollToWork}
            >
              View portfolio
            </Button>
          </motion.div>
        </div>

        {/* Orca silhouette */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-60px] flex justify-center opacity-20"
          aria-hidden
        >
          <Image src="/orca.svg" alt="Orca silhouette" width={400} height={200} className="h-[200px] w-auto" />
        </div>
      </section>

      {/* Portfolio section */}
      <section id="work" className="relative">
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Portfolio</h2>
              <p className="mt-1 text-orcablue-100/80">Selected web projects</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.length > 0 ? (
              projects.map((p) => (
                <a
                  key={p._id}
                  href={p.link || `#`}
                  target={p.link ? "_blank" : undefined}
                  rel={p.link ? "noopener noreferrer" : undefined}
                  className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  {p.mainImage && (
                    <div className="relative aspect-video w-full overflow-hidden bg-orcablue-900/30">
                      <Image
                        src={urlFor(p.mainImage).width(600).height(400).url()}
                        alt={p.mainImage.alt || p.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-medium text-white">{p.title}</h3>
                      {p.link && (
                        <span className="i-lucide-arrow-up-right h-4 w-4 text-orcablue-100/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-orcablue-100/80">{p.description}</p>
                    {p.tags && p.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-orcablue-100/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-12 text-center">
<p className="text-orcablue-100/80">No projects yet. Add some in the <Link href="/studio" className="underline hover:text-white">Sanity Studio</Link>.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
