import { supabase } from "@/src/app/lib/supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      product_images(*),
      categories(*)
    `);

  if (error) throw error;

  return data;
}