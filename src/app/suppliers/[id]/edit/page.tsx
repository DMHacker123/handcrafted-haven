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
      <main className="min-h-screen">
        <h1 className="text-3xl font-bold">
          Seller not found
        </h1>
      </main>
      );
  }
  async function updateSupplier(formData: FormData) {
  "use server";

  console.log("Name:", formData.get("name"));
  console.log("Email:", formData.get("email"));
  console.log("Phone:", formData.get("phone"));
  console.log("Category:", formData.get("category"));
}

  return (
    <main className="min-h-screen">
      <Header />

      <h1 className="text-3xl font-bold">
        Edit Seller
      </h1>
      <form  action={updateSupplier}
        className="flex flex-col gap-4 max-w-md">
        <input
          name="name"
          type="text"
          defaultValue={supplier.name}
          className="border p-2 rounded"
        />

        <input
          name="email"
          type="email"
          defaultValue={supplier.email}
          className="border p-2 rounded"
        />

        <input
          name="phone"
          type="text"
          defaultValue={supplier.phone}
          className="border p-2 rounded"
        />

        <input
          name="category"
          type="text"
          defaultValue={supplier.category}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-[#53483c] text-white px-4 py-2 rounded hover:bg-white hover:text-[#53483c]">
          Save Changes
        </button>
      </form>
       <Footer />
    </main>
  );
}
