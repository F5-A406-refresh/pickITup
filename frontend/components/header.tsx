"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
  name: string;
  href: string;
}

const navLinks: LinkType[] = [
  { name: "채용공고", href: "/recruit" },
  { name: "기술블로그", href: "/techBlog" },
  { name: "미니 게임", href: "/game" },
  { name: "면접 대비", href: "/interview" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <header className="flex justify-between border-b border-[#d9d9d9]">
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/ITUlogo.png"
            alt="logo"
            width={36}
            height={36}
            priority={true}
            className="m-3"
          />
          <div className="mx-1 text-lg font-semibold text-f5black-400">
            pick
          </div>
          <div className="mx-1 text-lg font-semibold text-f5green-300">IT</div>
          <div className="mx-1 text-lg font-semibold text-f5black-400">up</div>
        </Link>
      </div>
      <div className="flex">
        {navLinks.map((link: LinkType) => {
          return (
            <div key={link.name} className="m-auto">
              <Link
                href={link.href}
                className={`mr-4 hover:text-f5green-300 ${
                  !isActive(link.href)
                    ? "text-f5black-400"
                    : "text-f5green-400 font-bold"
                }`}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="p-3 my-auto mr-10 bg-f5gray-300 rounded-2xl">
        <Link
          href="/social"
          className="text-f5black-400 hover:text-f5green-300"
        >
          로그인 & 회원가입
        </Link>
      </div>
    </header>
  );
}
