import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#53483c] text-white py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold">Handcrafted Haven</h4>
          <p>Discover unique handmade treasures.</p>
        </div>

        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="border-t border-white/30 mt-6 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Handcrafted Haven. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
