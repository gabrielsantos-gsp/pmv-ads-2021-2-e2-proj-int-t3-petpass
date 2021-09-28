import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkPros extends LinkProps {
  href: string;
  children?: ReactNode;
}

export function Link({ href, children, ...props }: LinkPros) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
