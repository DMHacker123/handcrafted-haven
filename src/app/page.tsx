import Image from 'next/image';
import Header from '@/src/components/header'
import Footer from '@/src/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header/>

        {/* Hero Section */}
        <section className="text-center py-20 px-20">
          <h2 className="text-5xl font-bold mb-6">Rating Handcrafts</h2>
          <p className="text-lg mb-8 max-w-6xl mx-auto">Rate your favorite handcrafted items and help others discover unique treasures.</p>
          <button className="px-6 py-3 rounded-lg bg-[#53483c] text-white">
            Rate Now
          </button>
        </section>

        {/* Featured Products */}
        <h3 className="text-3xl font-bold text-center mb-10">Featured Products</h3>
        <section className="grid grid-cols-1 md:grid-cols-3 py-16 px-6 gap-8 max-w-6xl mx-auto">
          <div className="flex-col max-w-6xl mx-auto">
            <Image src="/home/wooden-bowl.png" alt="Handcrafted Wooden Bowl" width={400} height={300} className="rounded-lg mb-4" />
            <h4 className="text-xl font-semibold mb-2">Handcrafted Wooden Bowl</h4>
            <p>Crafted with natural materials</p>
          </div>

          <div className="flex-col max-w-6xl mx-auto">
            <Image src="/home/ceramic-mug.png" alt="Handcrafted Ceramic Mug" width={400} height={300} className="rounded-lg mb-4" />
            <h4 className="text-xl font-semibold mb-2">Handcrafted Ceramic Mug</h4>
            <p>Beautifully crafted with high-quality clay</p>
          </div>

          <div className="flex-col max-w-6xl mx-auto">
            <Image src="/home/handcrafted-pottery.png" alt="Handcrafted Pottery" width={400} height={300} className="rounded-lg mb-4"></Image>
            <h4 className="text-xl font-semibold mb-2">Handcrafted Pottery</h4>
            <p>Unique and artistic pieces</p>
          </div>
        </section>
        {/* Footer */}
        <Footer/>
    </main>
  );
}