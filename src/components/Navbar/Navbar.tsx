"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/Navbar/MobileMenu";
import style from "@/components/Navbar/styles/Navbar.module.scss";
import NavLinks from "@/components/Navbar/NavLinks";

export default function Navbar() {
    return (
        <div className={style.header}>
            <div className={style.nav}>
                {/* 左边 —— Logo */}
                <div className={style.logo}>
                    <Link href="/public">
                        <Image
                            className={style.img}
                            src="/logo.png"
                            alt="Cwall"
                            priority
                            width={153}
                            height={56}
                        />
                    </Link>
                </div>

                {/* 中间 —— 导航 */}
                <div className="">
                    <NavLinks />
                </div>

                {/* 右边 —— 功能按钮 */}
                <div className="">
                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}
