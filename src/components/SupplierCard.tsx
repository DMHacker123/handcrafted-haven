
type SupplierProps = {
    name: string;
    email: string;
    phone: string;
    category: string;
};

export default function SupplierCard({ 
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
            <p className="text-gray-600">{category}</p>
        </div>
    );
    
}