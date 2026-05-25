"use client"

import { createContext, useContext, useState } from "react"

const DropdownContext = createContext<{
  open: string | null;
  setOpen: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  open: null,
  setOpen: () => {},
});

export default function Dropdown({ children, className }: { children: React.ReactNode, className?: string }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className={`${className || ''}`} onMouseLeave={() => setOpen(null)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children, name }: { children: React.ReactNode, name: string }) {
  const { open, setOpen } = useContext(DropdownContext);

  return (
    <div onMouseEnter={() => setOpen(name)} onFocus={() => setOpen(name)} onBlur={() => setOpen(null)} className={`group ${open === name ? 'active' : ''}`}>
      {children}
    </div>
  );
}

export function DropdownContent({ children, name, className, ...props }: { children: React.ReactNode, name: string, className?: string }) {
  const { open } = useContext(DropdownContext);

  if (open !== name) return null;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function DropdownItem({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}