import Footer from "@/components/footer";
import Header from "@/components/header";
import { createSellerProfile } from "@/services/sellerService";
import { redirect } from "next/navigation";

export default function CreateSupplierPage() {
  async function createSupplier(formData: FormData) {
  "use server";

    const result = await createSellerProfile({
      user_id: "f7dcf230-57f7-44f5-b616-dacdb7e3664f",
      shop_name: formData.get("shop_name"),
      bio: formData.get("bio"),
      location: formData.get("location"),
      website: formData.get("website"),
    });

    // console.log(result);
    redirect("/suppliers");
  }

  
  return (
    <main className="min-h-screen">
      <Header />
  
      <h1 className="text-3xl font-bold">
        Create Seller
      </h1>
      <form action={createSupplier}
        className="flex flex-col gap-4 max-w-md">
        <input
          name="shop_name"
          type="text"
          placeholder="Shop Name"
          className="border p-2 rounded"
        />
  
        <input
          name="bio"
          type="text"
          placeholder="Bio"
          className="border p-2 rounded"
        />
  
        <input
          name="location"
          type="text"
          placeholder="Location"    
          className="border p-2 rounded"
        />
  
        <input
          name="website"
          type="text"
          placeholder="Website"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-[#53483c] text-white px-4 py-2 rounded hover:bg-white hover:text-[#53483c]">
          Create Seller
        </button>
      </form>
      <Footer />
    </main>
  );
}