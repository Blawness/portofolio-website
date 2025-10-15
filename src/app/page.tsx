import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getProjects, getFeaturedProjects, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const [featuredProjects, allProjects] = await Promise.all([
    getFeaturedProjects(),
    getProjects()
  ]);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] overflow-hidden">
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

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-orcablue-100 backdrop-blur-md"
          >
            <span className="i-lucide-waves h-4 w-4" aria-hidden />
            Vorca Studio Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="text-balance bg-gradient-to-b from-white to-orcablue-200 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl lg:text-7xl"
          >
            Crafting digital experiences with depth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-3xl text-pretty text-lg text-orcablue-100/90 sm:text-xl"
          >
            A curated collection of web projects, case studies, and creative solutions that push the boundaries of modern web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-orcablue-500 hover:bg-orcablue-400 text-white px-8 py-3 text-base"
              onClick={scrollToWork}
            >
              Explore Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-3 text-base"
              asChild
            >
              <Link href="/studio">Manage Content</Link>
            </Button>
          </motion.div>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-2xl font-semibold text-white sm:text-3xl">
                {allProjects.length}
              </div>
              <div className="text-sm text-orcablue-100/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white sm:text-3xl">
                {featuredProjects.length}
              </div>
              <div className="text-sm text-orcablue-100/70">Featured</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl font-semibold text-white sm:text-3xl">
                {new Set(allProjects.flatMap(p => p.tags || [])).size}
              </div>
              <div className="text-sm text-orcablue-100/70">Technologies</div>
            </div>
          </motion.div>
        </div>

        {/* Orca silhouette */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-60px] flex justify-center opacity-15"
          aria-hidden
        >
          <Image src="/orca.svg" alt="Orca silhouette" width={400} height={200} className="h-[200px] w-auto" />
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <div className="relative mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured Work</h2>
              <p className="mt-3 text-lg text-orcablue-100/80">Highlighted projects that showcase our expertise</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <motion.a
                  key={project._id}
                  href={project.link || `#`}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:scale-[1.02]"
                >
                  {project.mainImage && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-orcablue-900/30">
                      <Image
                        src={urlFor(project.mainImage).width(800).height(500).url()}
                        alt={project.mainImage.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orcablue-900/60 via-transparent to-transparent" />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-orcablue-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orcablue-100 transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <span className="i-lucide-arrow-up-right h-5 w-5 text-orcablue-100/60 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                      )}
                    </div>
                    <p className="mt-3 text-orcablue-100/80 leading-relaxed">{project.description}</p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-orcablue-100/70 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-orcablue-100/50">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section id="work" className="relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">All Projects</h2>
              <p className="mt-2 text-lg text-orcablue-100/80">Complete portfolio collection</p>
            </div>
            <div className="text-sm text-orcablue-100/60">
              {allProjects.length} project{allProjects.length !== 1 ? 's' : ''}
            </div>
          </motion.div>

          {allProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, index) => (
                <motion.a
                  key={project._id}
                  href={project.link || `#`}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:scale-[1.02]"
                >
                  {project.mainImage && (
                    <div className="relative aspect-video w-full overflow-hidden bg-orcablue-900/30">
                      <Image
                        src={urlFor(project.mainImage).width(600).height(400).url()}
                        alt={project.mainImage.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex h-2 w-2 rounded-full bg-orcablue-400" />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium text-white group-hover:text-orcablue-100 transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <span className="i-lucide-arrow-up-right h-4 w-4 text-orcablue-100/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-orcablue-100/80 leading-relaxed">{project.description}</p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-orcablue-100/70 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-orcablue-100/50">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                <span className="i-lucide-folder-plus h-8 w-8 text-orcablue-100/60" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No projects yet</h3>
              <p className="text-orcablue-100/80 mb-6">
                Start building your portfolio by adding your first project in the Sanity Studio.
              </p>
              <Button asChild className="bg-orcablue-500 hover:bg-orcablue-400 text-white">
                <Link href="/studio">Add Project</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 sm:p-12"
          >
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to create something amazing?
            </h2>
            <p className="mt-4 text-lg text-orcablue-100/80">
              Explore the studio to add your own projects and build your portfolio.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-orcablue-500 hover:bg-orcablue-400 text-white"
                asChild
              >
                <Link href="/studio">Open Studio</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
