"use client";
import Container from "@/app/components/client/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sortOptions = [
  { name: "Photos", href: "photo", current: true },
  { name: "Videos", href: "video", current: false },
];

export default function GalleryNav({ children }) {
  const pathname = usePathname().split("/").reverse()[0];
  return (
    <Container>
      <div className="w-full py-2">
        <div className="container mx-auto flex space-x-4 ">
          {sortOptions.map((sort, index) => (
            <Link key={index * 326} href={`/gallery/${sort.href}`}>
              <button
                className={`relative py-2 px-4 rounded  ${
                  pathname === sort.href ? "font-bold" : ""
                }`}
              >
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-black transition-transform duration-700 ease-in-out ${
                    pathname === sort.href ? "w-full" : "w-0"
                  }`}
                ></span>
                {sort.name}
              </button>
            </Link>
          ))}
        </div>
        <div>{children}</div>
      </div>
    </Container>
  );
}
