import Footer from "@/components/footer";
import Header from "@/components/header";
import { deleteSellerProfile } from "@/services/sellerService";
import { getAllSellers } from "@/services/sellerService";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DeleteSupplierPage({
  params,
}: Props) {

  const { id } = await params;

  const { data: sellers } = await getAllSellers();
  const supplier = sellers?.find(
    (supplier) => supplier.id === id
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
    const result = await deleteSellerProfile(id);
    console.log("Deleting supplier...");
    console.log(result);
    redirect("/suppliers");
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
            {supplier.shop_name}
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