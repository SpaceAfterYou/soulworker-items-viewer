import type { Header } from "./header";

export type Locale = {
  items: Record<string, object> | {};
  header: Header;
};
