import Link from "next/link";
import AuthNav from "./AuthNav";
export default function Header() {
  return (
    <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-10 px-6">
          <Link href='/'>
              <h1 className="text-2xl font-bold text-center md:text-left">
                Handcrafted Haven
              </h1>
            </Link>

      <nav className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/favorites">Favorites</Link>
        <Link href="/suppliers">Sellers</Link>
        <AuthNav />

      </nav>
    </header>
  );
}
