import Image from "next/image";
import styles from "./page.module.css";
import About from "../pages/about";
import Profiles from "../pages/profiles";
import Tabbar from "../pages/tabbar";

export default function Home() {
  return (
    <main className={styles.main} >
      <Tabbar />
      <Profiles />
    </main>
  );
}
