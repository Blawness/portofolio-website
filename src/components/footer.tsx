import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-orcablue-900/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Image src="/orca.svg" alt="Orca" width={24} height={24} className="h-6 w-6" />
            </span>
            <span className="text-xl font-semibold tracking-wide">Vorca Studio</span>
          </Link>
          
          <p className="max-w-md text-orcablue-100/70">
            Crafting digital experiences with depth. A portfolio showcasing modern web development and creative solutions.
          </p>
          
          <div className="flex gap-6 text-sm text-orcablue-100/60">
            <Link href="#work" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/studio" className="hover:text-white transition-colors">
              Studio
            </Link>
          </div>
          
          <div className="text-xs text-orcablue-100/50">
            © {new Date().getFullYear()} Vorca Studio. Built with Next.js & Sanity.
          </div>
        </div>
      </div>
    </footer>
  );
}