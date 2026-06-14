import { supabase } from "@/lib/supabase";

export async function getFavorites(
  userId: string
) {
  return await supabase
    .from("favorites")
    .select(`
      *,
      products!favorites_product_id_fkey (
        *,
        product_images(*)
      )
    `)
    .eq("user_id", userId);
}

export async function addFavorite(
  userId: string,
  productId: string
) {
  return await supabase
    .from("favorites")
    .insert({
      user_id: userId,
      product_id: productId
    });
}

export async function removeFavorite(
  userId: string,
  productId: string
) {
  return await supabase
    .from("favorites")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId);
}