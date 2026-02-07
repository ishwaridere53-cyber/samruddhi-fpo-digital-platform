export default function Brands() {
  return (
    <section
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/home_page.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* Samruddhi Gold */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/gold.png"
            alt="Samruddhi Gold"
            className="h-72 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between items-center p-6">
            <h2 className="text-2xl font-bold text-yellow-400 pt-4">
              Samruddhi Gold
            </h2>
            <p className="text-white">
              Healthy Food from Farmers
            </p>
          </div>
        </div>

        {/* Krishi Samruddhi */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/krishi.png"
            alt="Krishi Samruddhi"
            className="h-72 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between items-center p-6">
            <h2 className="text-2xl font-bold text-green-300 pt-4">
              Krishi Samruddhi
            </h2>
            <p className="text-white">
              Soil & Crop Nutrition Solutions
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
