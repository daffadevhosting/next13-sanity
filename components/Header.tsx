import Image from 'next/image';
import Link from "next/link";
import css from "../styles/page.module.css"

function Header() {
    return (
        <header className={css.header}>
        <div>Header</div>
        </header>
    )
}

export default Header