const products = [
  { name: "Flavoured Chana", price: "₹120", img: "/halad_power.jpg.jpeg", isNew: false },
  { name: "Organic Tur Dal", price: "₹160", img: "/gul_powder.jpg.jpeg", isNew: false },
  { name: "Bio Fertilizer", price: "₹450", img: "/turmeric_ginger.jpg.jpeg", isNew: true },
  { name: "Cold Pressed Oil", price: "₹300", img: "/chana.jpg", isNew: false },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-green-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10 italic">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                />
                {p.isNew && (
                  <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-gray-900 mt-2 font-semibold text-sm">
                  {p.name}
                </h3>
                <p className="text-yellow-600 mt-2 font-bold text-lg">{p.price}</p>
                <button className="mt-4 w-full bg-yellow-500 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
