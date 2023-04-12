import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import css from "../styles/page.module.css";

function StudioNav(props: any) {
    return (
    <div className={css.navStudio}>
        <div className={css.navStudioNav}>
            <Link href="/" className={css.navBack}><RiArrowGoBackFill/> Back To Blog</Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
    );
}

export default StudioNav;
