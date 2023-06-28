export interface ISidebarItem {
  title: string;
  isOpen?: boolean;
  subItems?: ISidebarItem[];
}
