"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SupplierCard from "../../components/SupplierCard";
import { suppliers } from "../../lib/data";


export default function SupplierPage() {
  //  const suppliers = [
  // //   {
  //     id: 1,
  //     name: 'Ceramic Arts',
  //     email: 'ceramic@example.com',
  //   },
  //   {
  //     id: 2,
  //     name: 'Wood Creations',
  //     email: 'wood@example.com',
  //   },
  //   {
  //     id: 3,
  //     name: 'Handmade Crafts',
  //     email: 'crafts@example.com',
  //   },
  // ];

  return (
        <main className="min-h-screen">
          <Header />
          <section className="text-center py-16 px-6">
            <h2 className="text-5xl font-bold mb-6">Sellers</h2>
            <p className="text-lg max-w-4xl mx-auto">
              List of Sellers.
            </p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-6 gap-8 max-w-6xl mx-auto">       
            {suppliers.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                id={supplier.id}
                name={supplier.name}
                email={supplier.email}
                phone={supplier.phone}
                category={supplier.category}
              />
          ))}
            {/* <div>
              <h2>{supplier.name}</h2>
              <p>{supplier.email}</p>
            </div> */}
                       
          </div>

          <Footer />
        </main>

    );
}