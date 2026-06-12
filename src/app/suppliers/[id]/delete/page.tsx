import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { suppliers } from "@/src/lib/data";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DeleteSupplierPage({
  params,
}: Props) {

  const { id } = await params;

  const supplier = suppliers.find(
    (supplier) => supplier.id === Number(id)
  );

  if (!supplier) {
    return (
      <main className="p-10">
        <Header />

        <h1>Seller not found</h1>
        <Footer />
      </main>
    );
  }

  async function deleteSupplier() {
  "use server";

  console.log("Deleting supplier...");
}

  return (
    <main className="min-h-screen">
        <Header />
        <h1 className="text-3xl font-bold mb-6 text-center">
            Delete Seller
        </h1>

        <p>
            Are you sure you want to delete:
        </p>

        <p className="font-bold mt-4 text-lg text-center text-[#b89b72]">
            {supplier.name}
        </p>
        <form action={deleteSupplier}>
        <button type="submit" className="bg-[#53483c] text-white px-4 py-2 rounded hover:bg-white hover:text-[#53483c] block mx-auto mt-6">
            Confirm Delete
        </button>
        </form>
        
        <Footer />

    </main>
  );
}