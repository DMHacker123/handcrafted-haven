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
            <h1 className="text-3xl font-bold mb-6">Suppliers</h1>
            <p className="text-gray-700 mb-4">List of Suppliers</p>

            <div className="grid gap-4">
              {suppliers.map((supplier) => (
                <SupplierCard
                  key={supplier.id}  
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

        </main>

    );
}