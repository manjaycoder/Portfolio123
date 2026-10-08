import type { ContactKey } from "./types";

export type Contact = {
  key: ContactKey;
  /** Where the card's button goes. */
  href: string;
  /** The address itself, shown small under the name. */
  handle: string;
  /**
   * Discord has no public profile URL that resolves from a username, only from
   * a numeric id — and even that opens the app rather than a page for anyone
   * not signed in. So the handle is offered to the clipboard as well, which is
   * how people actually add each other there.
   */
  copyable?: boolean;
};

export const CONTACTS: readonly Contact[] = [
 
  { key: "email", href: "mailto:manjay.verma.coder@gmail.com", handle: "manjay.verma.coder@gmail.com" },
  {
    key: "discord",
    href: "https://discordapp.com/users/1294615681009979412",
    handle: "@alex",
    copyable: true,
  },
  { key: "github", href: "https://github.com/manjaycoder", handle: "manjaycoder" },
]
