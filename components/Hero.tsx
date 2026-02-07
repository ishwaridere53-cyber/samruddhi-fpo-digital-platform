export default function Hero() {
  return (
    <section
      className="h-[75vh] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/home_page.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-7xl">
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight whitespace-normal">
            From Farmer to Family – Pure, Trusted, Samruddhi
          </h1>

          <p className="text-lg mb-8 text-yellow-300 font-medium">
            Government Recognised Farmer Producer Organization
          </p>

          <button className="bg-yellow-500 text-green-900 px-8 py-3 rounded font-semibold text-lg hover:bg-yellow-400">
            Shop Now
          </button>

        </div>
      </div>
    </section>
  );
}
