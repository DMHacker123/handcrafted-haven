"use client";

import { useState } from "react";

interface ReviewFormProps {
  productId: number;
  onReviewAdded: (review: {
    name: string;
    rating: number;
    comment: string;
  }) => void;
}

export default function ReviewForm({
  productId,
  onReviewAdded,
}: ReviewFormProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      name,
      rating,
      comment,
    };

    const existingReviews = JSON.parse(
      localStorage.getItem(`reviews-${productId}`) || "[]"
    );

    const updatedReviews = [...existingReviews, newReview];

    localStorage.setItem(
      `reviews-${productId}`,
      JSON.stringify(updatedReviews)
    );

    onReviewAdded(newReview);

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="font-semibold mb-2">
        Leave a Review
      </h4>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full border rounded p-2 mb-2"
      >
        {[5, 4, 3, 2, 1].map((value) => (
          <option key={value} value={value}>
            {value} Stars
          </option>
        ))}
      </select>

      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border rounded p-2 mb-2"
        rows={3}
      />

      <button
        onClick={handleSubmit}
        className="bg-[#53483c] text-white px-4 py-2 rounded"
      >
        Submit Review
      </button>
    </div>
  );
}