"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <img src="/orca.svg" alt="Orca" className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-wide">Vorca Studio</span>
        </Link>

        <NavigationMenu.Root>
          <NavigationMenu.List className="hidden gap-6 text-sm text-orcablue-100 sm:flex">
            <NavigationMenu.Item>
              <Link className="hover:text-white/90" href="#work">
                Work
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link className="hover:text-white/90" href="#services">
                Services
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link className="hover:text-white/90" href="#about">
                About
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link className="hover:text-white/90" href="#contact">
                Contact
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}