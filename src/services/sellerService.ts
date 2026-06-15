import { supabase } from "@/lib/supabase";

export async function getAllSellers()

export async function getSellerProfile(userId: string) {
  return await supabase
    .from("seller_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();
}

export async function createSellerProfile(profile: any) {
  return await supabase
    .from("seller_profiles")
    .insert(profile);
}

export async function updateSellerProfile(
  sellerId: string,
  updates: any
) {
  return await supabase
    .from("seller_profiles")
    .update(updates)
    .eq("id", sellerId);
}