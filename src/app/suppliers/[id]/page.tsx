import { suppliers } from "@/lib/data";
import Footer from "@/components/footer";
import Header from "@/components/header";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SupplierDetailsPage({
  params,
}: Props) {

  const {id} = await params;
  const supplier = suppliers.find((supplier) => supplier.id === Number(id));

  if (!supplier) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Seller not found
        </h1>
      </main>
      );
  }

  return (
    <main className="min-h-screen">
      <Header />

      <h1 className="text-3xl font-bold">
        Seller Details
      </h1>
      
      <div className="mt-6 border rounded-lg p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        {supplier?.name}
      </h2>

      <p>
        <strong>Email:</strong> {supplier?.email}
      </p>

      <p>
        <strong>Phone:</strong> {supplier?.phone}
      </p>

      <p>
        <strong>Category:</strong> {supplier?.category}
      </p>
    </div>
    <Footer />
    </main>
  );
}