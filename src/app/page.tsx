import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Handcrafted Haven</h1>
          <nav className="flex items-center space-x-6">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Favorites</a>

            {/* Tailwind button color to be resolved */}
            <button className="px-4 py-2 rounded-lg bg-[#53483c] text-white">
              Login
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h2 className="text-5xl font-bold mb-6">Rating Handcrafts</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Rate your favorite handcrafted items and help others discover unique treasures.</p>
          <button className="px-6 py-3 rounded-lg bg-[#53483c] text-white">
            Rate Now
          </button>
        </section>

        {/* Featured Products */}
        <h3 className="text-3xl font-bold text-center mb-10">Featured Products</h3>
        <section className="flex py-16 px-6 gap-8 justify-center">
          <div className="flex-col">
            <Image src="/home/wooden-bowl.png" alt="Handcrafted Wooden Bowl" width={400} height={300} className="rounded-lg mb-4" />
            <h4 className="text-xl font-semibold mb-2">Handcrafted Wooden Bowl</h4>
            <p>Crafted with natural materials</p>
          </div>

          <div className="flex-col">
            <Image src="/home/ceramic-mug.png" alt="Handcrafted Ceramic Mug" width={400} height={300} className="rounded-lg mb-4" />
            <h4 className="text-xl font-semibold mb-2">Handcrafted Ceramic Mug</h4>
            <p>Beautifully crafted with high-quality clay</p>
          </div>

          <div className="flex-col">
            <Image src="/home/handcrafted-pottery.png" alt="Handcrafted Pottery" width={400} height={300} className="rounded-lg mb-4"></Image>
            <h4 className="text-xl font-semibold mb-2">Handcrafted Pottery</h4>
            <p>Unique and artistic pieces</p>
          </div>
        </section>
    </main>
  );
}