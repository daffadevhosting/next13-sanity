import Link from "next/link";
import css from "../styles/page.module.css";

function Header() {
    return (
        <header className={css.header}>
        <div className={css.leftSide}>
            <Link href="/">Header</Link>
        </div>
        <div className={css.rightSide}>

        </div>
        </header>
    )
}

export default Header
