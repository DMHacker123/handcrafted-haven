import Footer from "@/components/footer";
import Header from "@/components/header";

const products = [
  {
    id: 1,
    name: "Woven Market Basket",
    description: "A sturdy handwoven basket for shopping, storage, or display.",
  },
  {
    id: 2,
    name: "Clay Flower Vase",
    description: "A simple ceramic vase shaped and finished by hand.",
  },
  {
    id: 3,
    name: "Carved Wooden Spoon",
    description: "A smooth kitchen spoon made from natural wood.",
  },
  {
    id: 4,
    name: "Embroidered Linen Towel",
    description: "A soft towel with colorful stitched details.",
  },
  {
    id: 5,
    name: "Beaded Bracelet",
    description: "A lightweight bracelet made with hand-selected beads.",
  },
  {
    id: 6,
    name: "Painted Trinket Dish",
    description: "A small dish for jewelry, keys, or everyday keepsakes.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="text-center py-16 px-6">
        <h2 className="text-5xl font-bold mb-6">Products</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Browse simple handcrafted items from local makers.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 py-10 px-6 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-lg overflow-hidden"
          >
            <div className="h-[230px] bg-[#f5f1eb] flex items-center justify-center text-7xl text-[#53483c]">
              :)
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
