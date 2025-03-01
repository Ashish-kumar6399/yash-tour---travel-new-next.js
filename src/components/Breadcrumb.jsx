"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumbLinks = useMemo(() => {
    if (!pathname) return [{ label: "Home", to: "/" }];

    const paths = pathname.split("/").filter(Boolean);
    const links = paths.map((path, index) => {
      const linkPath = "/" + paths.slice(0, index + 1).join("/");
      return {
        label: decodeURIComponent(path.charAt(0).toUpperCase() + path.slice(1)), // Handle URL encoding
        to: linkPath,
      };
    });

    return [{ label: "Home", to: "/" }, ...(links || [])]; // Ensure links is always an array
  }, [pathname]);

  return (
    <div className="w-full overflow-x-auto">
    <nav className="container bg-gray-100 py-3 px-5 rounded-lg shadow-md w-fit">
      <ul className="flex items-center text-sm text-black-600 space-x-2">
        {breadcrumbLinks.map((link, index) => (
          <li key={index} className="flex items-center">
            <Link
              href={link.to}
              className={`${
                index === breadcrumbLinks.length - 1
                  ? "text-black-900 font-semibold"
                  : "text-blue-600 hover:underline"
              }`}
            >
              {link.label}
            </Link>
            {index < breadcrumbLinks.length - 1 && (
              <span className="mx-2 text-black-400">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
  );
};

export default Breadcrumbs;
