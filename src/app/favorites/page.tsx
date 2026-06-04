import Image from "next/image";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f1]">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">Handcrafted Haven</h1>

        <nav className="flex items-center gap-6">
          <a href="/">Home</a>
          <a href="#">Products</a>
          <a href="/favorites" className="font-semibold">
            Favorites
          </a>

          <button className="px-4 py-2 rounded-lg bg-[#53483c] text-white hover:bg-[#3f372d] transition">
            Login
          </button>
        </nav>
      </header>

      {/* Page Title */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Your Favorite Items</h2>

        <p className="text-gray-600">
          A collection of handcrafted products you love.
        </p>
      </section>

      {/* Favorites Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-20">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <Image
            src="/home/wooden-bowl.png"
            alt="Wooden Bowl"
            width={400}
            height={300}
            className="w-full h-[250px] object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Handcrafted Wooden Bowl
            </h3>

            <p className="text-gray-600 mb-4">
              Crafted with natural materials and polished by hand.
            </p>

            <button className="w-full py-2 rounded-lg bg-[#53483c] text-white hover:bg-[#3f372d] transition">
              Remove Favorite
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <Image
            src="/home/ceramic-mug.png"
            alt="Ceramic Mug"
            width={400}
            height={300}
            className="w-full h-[250px] object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Handcrafted Ceramic Mug
            </h3>

            <p className="text-gray-600 mb-4">
              Beautifully crafted with premium quality clay.
            </p>

            <button className="w-full py-2 rounded-lg bg-[#53483c] text-white hover:bg-[#3f372d] transition">
              Remove Favorite
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <Image
            src="/home/handcrafted-pottery.png"
            alt="Pottery"
            width={400}
            height={300}
            className="w-full h-[250px] object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Handcrafted Pottery
            </h3>

            <p className="text-gray-600 mb-4">
              Unique artistic pottery pieces made by local artisans.
            </p>

            <button className="w-full py-2 rounded-lg bg-[#53483c] text-white hover:bg-[#3f372d] transition">
              Remove Favorite
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}