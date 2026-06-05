import Image from "next/image";
import { getFavorites } from "@/src/services/favoriteService";
import { TEST_USER_ID } from "@/src/lib/devUser";

export default async function FavoritesPage() {
  const { data: favorites, error } =
    await getFavorites(TEST_USER_ID);


  return (
    <main className="min-h-screen bg-[#f5f1eb]">

      {/* Header */}
     {/* Header */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-10">
        <h1 className="text-2xl font-bold text-center md:text-left">Handcrafted Haven</h1>
          <nav className= "flex items-center space-x-6">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="favorites">Favorites</a>

            {/* Tailwind button color to be resolved */}
            <button className="px-4 py-2 rounded-lg bg-[#53483c] text-white">
              Login
            </button>
          </nav>
        </header>

      {/* Page Title */}
      <section className="text-center py-20 px-20">
        <h2 className="text-5xl font-bold mb-6">
          Your Favorite Items
        </h2>

        <p className="text-lg max-w-4xl mx-auto">
          A collection of handcrafted products you love.
        </p>
      </section>

      {/* Empty State */}
      {(!favorites || favorites.length === 0) && (
        <div className="text-center pb-20">
          <p className="text-gray-500 text-lg">
            No favorite products found.
          </p>
        </div>
      )}

      {/* Favorites Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 py-16 px-6 gap-8 max-w-6xl mx-auto">
        {favorites?.map((favorite: any) => {
          const product = favorite.products;

          const imageUrl =
            product?.product_images?.[0]?.image_url ||
            "/home/wooden-bowl.png";

          return (
            <div
              key={favorite.id}
              className="flex-col max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={imageUrl}
                alt={product?.title || "Product"}
                width={400}
                height={300}
                className="rounded-lg mb-4 w-full h-[250px] object-cover"
              />

              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  {product?.title}
                </h4>

                <p className="mb-3 text-gray-600">
                  {product?.description}
                </p>

                <p className="font-bold mb-4">
                  ${product?.price}
                </p>

                <button className="w-full py-2 rounded-lg bg-[#53483c] text-white">
                  Remove Favorite
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Footer */}
      <footer className="bg-[#53483c] text-white py-8 px-6 mt-16">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">
              Handcrafted Haven
            </h4>

            <p>
              Discover unique handmade treasures.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="/">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/30 mt-6 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Handcrafted Haven.
            {" "}
            All rights reserved.
          </p>
        </div>

      </footer>
    </main>
  );
}