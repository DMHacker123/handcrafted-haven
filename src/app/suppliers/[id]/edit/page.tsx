import Footer from "@/components/footer";
import Header from "@/components/header";
import { updateSellerProfile } from "@/services/sellerService";
import { getAllSellers } from "@/services/sellerService";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SupplierDetailsPage({
  params,
}: Props) {

  const {id} = await params;
  const { data: sellers, error } = await getAllSellers();

  const supplier = sellers?.find(
    (seller) => seller.id === id
  );

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
    // await updateSellerProfile(id, {
    //   shop_name: formData.get("shop_name"),
    //   bio: formData.get("bio"),
    //   location: formData.get("location"),
    //   website: formData.get("website"),
    // });
    const result =await updateSellerProfile(id, {
      shop_name: formData.get("shop_name"),
      bio: formData.get("bio"),
      location: formData.get("location"),
      website: formData.get("website"),
    });
    console.log("UPDATE RESULT:");
    console.log(result);
  }

  return (
    <main className="min-h-screen">
      <Header />

      <h1 className="text-3xl font-bold">
        Edit Seller
      </h1>
      <form action={updateSupplier}
        className="flex flex-col gap-4 max-w-md">
        <input
          name="shop_name"
          type="text"
          defaultValue={supplier.shop_name}
          className="border p-2 rounded"
        />

        <input
          name="bio"
          type="text"
          defaultValue={supplier.bio}
          className="border p-2 rounded"
        />

        <input
          name="location"
          type="text"
          defaultValue={supplier.location}
          className="border p-2 rounded"
        />

        <input
          name="website"
          type="text"
          defaultValue={supplier.website ?? ""}
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
