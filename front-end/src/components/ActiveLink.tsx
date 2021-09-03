import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    shouldMatchExactHref?: boolean;
}


export function ActiveLink({ children, shouldMatchExactHref, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()

    let isActive = false;

    if (asPath === rest.href || asPath === rest.as) {
        isActive = true;

    }


    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? "gray.800" : "gray.50"
            })}
        </Link>
    );
}
