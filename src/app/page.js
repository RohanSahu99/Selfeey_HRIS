import Image from "next/image";
import styles from "./page.module.css";
import NavBarWithNestedMenus from "@/Pages/NavBar";

export default function Home() {
  return (
    <div className={styles.page}>
     <NavBarWithNestedMenus/>
    </div>
  );
}
