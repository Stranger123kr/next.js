"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <HoveredLink href="/">
            <MenuItem setActive={setActive} active={""} item="Home"></MenuItem>
          </HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/interface-design">
                Basic Music Theory
              </HoveredLink>
              <HoveredLink href="/seo">Advance Composition</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/contact">
            <MenuItem
              setActive={setActive}
              active={""}
              item="Contact Us"
            ></MenuItem>
          </HoveredLink>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
