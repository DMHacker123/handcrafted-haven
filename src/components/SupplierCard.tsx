"use client";

import Link from "next/link";

type SupplierProps = {
    id: number;
    name: string;
    email: string;
    phone: string;
    category: string;
};

export default function SupplierCard({ 
    id,
    name, 
    email,
    phone,
    category 
}: SupplierProps) {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">{phone}</p>
            <p className="text-lg text-[#b89b72] py-6 font-semibold">{category}</p>

            <div className="flex gap-2 mt-4">
                <Link 
                href={`/suppliers/${id}`}                 
                className="bg-[#53483c] text-white px-4 py-2 rounded hover:bg-white hover:text-[#53483c]">
                View
                </Link>

                <Link 
                href={`/suppliers/${id}/edit`}  
                className="bg-[#53483c] text-white px-4 py-2 rounded hover:bg-white hover:text-[#53483c]">
                Edit
                </Link>

                <Link 
                href={`/suppliers/${id}/delete`}  
                className="bg-[#53483c] text-white px-4 py-2 rounded hover:bg-white hover:text-[#53483c]">
                Delete
                </Link>
                
            </div>
        
        
        </div>
        
    );
    
}