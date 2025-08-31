"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import style from "@/components/Navbar/styles/MobileMenu.module.scss";

// 移动端菜单
export default function MobileMenu() {
    // 菜单是否打开
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div>
            {/* 菜单按钮 */}
            <button
                className={style.MenuButton}
                onClick={(e) => setMenuOpen(!menuOpen)}
            >
                {!menuOpen ? <Menu /> : <X />}
            </button>

            {/* 菜单内容 */}
            {menuOpen && (
                <div>
                    <p>Menu IS OPEN</p>
                </div>
            )}
        </div>
    );
}
