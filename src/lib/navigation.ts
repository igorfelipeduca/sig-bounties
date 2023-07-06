import { TSidebarItem } from "@/app/types";

export const navigationItems: TSidebarItem[] = [
  {
    title: "Home",
    isOpen: false,
  },
  {
    title: "About us",
    isOpen: false,
  },
  {
    title: "Sig + Gamba",
    isOpen: false,
    url: "sig-gamba",
  },
  {
    title: "Content",
    isOpen: false,
  },
  {
    title: "Bounties",
    isOpen: false,
    subItems: [
      {
        title: "Dynamic SEO",
        isOpen: false,
        url: "seo",
        tag: "bounty",
      },
    ],
  },
];
