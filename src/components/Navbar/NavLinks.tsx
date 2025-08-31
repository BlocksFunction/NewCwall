"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/components/Navbar/styles/NavLinks.module.scss";

export default function NavLinks() {
    // 获取访问的路径名称("/"开头)
    const pathname = usePathname();

    // 导航链接
    const navLinks = [
        // 微闻
        {
            name: "微闻",
            link: "/ww",
        },
        // 新阅
        {
            name: "新阅",
            link: "/nr",
        },
        // 云墨
        {
            name: "云墨",
            link: "ym",
        },
    ];

    return (
        <div>
            {navLinks.map((navItem) => (
                <Link className={style.link} href={navItem.link}>
                    {navItem.name}
                </Link>
            ))}
        </div>
    );
}
