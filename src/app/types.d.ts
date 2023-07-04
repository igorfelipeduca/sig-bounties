export type TSidebarItem = {
  title: string;
  isOpen?: boolean;
  subItems?: TSidebarItem[];
  url?: string;
};
