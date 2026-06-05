import { supabase } from "@/src/lib/supabase";

export async function getReviews(
  productId: string
) {
  return await supabase
    .from("reviews")
    .select(`
      *,
      profiles (
        first_name,
        last_name,
        avatar_url
      )
    `)
    .eq("product_id", productId);
}

export async function createReview(
  review: any
) {
  return await supabase
    .from("reviews")
    .insert(review);
}

export async function deleteReview(
  reviewId: string
) {
  return await supabase
    .from("reviews")
    .delete()
    .eq("id", reviewId);
}