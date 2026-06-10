import Link from "next/link";
import styles from "./Navbar.module.css";
import AuthNav from "./AuthNav";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Handcrafted Haven</Link>
      </div>

      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <AuthNav />
      </ul>
    </nav>
  );
}