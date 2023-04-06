import Link from "next/link";
import css from "../styles/page.module.css";

function Header() {
    return (
        <header>
        <div className={css.header}>
            <div className={css.leftSide}>
                <Link href="/">
                    <h1 className={css.textLogo}>Header</h1>
                </Link>
            </div>
            <div className={css.rightSide}>

            </div>
        </div>
        </header>
    )
}

export default Header
