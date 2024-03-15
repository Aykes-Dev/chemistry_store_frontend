import HeaderInfo from "../header-info";
import NavBAr from "../nav-bar";
import styles from "./index.module.css"

export default function Header(){
    return (
        <header 
            id={styles.fon}
            className='h-screen bg-fixed bg-center bg-no-repeat bg-cover p-2'>
            <NavBAr />
            <HeaderInfo />
        </header>
    );
}