const About = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto mb-20 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Our <span className="text-red-500">Story</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl border-l-4 border-red-500 pl-4 max-w-2xl">
          "A unique fusion of code and cuisine."
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="Cooking"
            className="rounded-3xl object-cover w-full h-[400px] shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-3xl group-hover:bg-black/10 transition duration-500"></div>
        </div>

        <div className="space-y-10">
          <div className="bg-zinc-900/60 p-8 rounded-3xl border border-white/5 backdrop-blur-md hover:scale-[1.02] transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-white">What is it?</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              SwaadScript is a simple platform designed for those who want to
              keep their cooking recipes safely in one place. You can easily add
              recipes, mark them as favorites, update or delete them anytime.
            </p>
          </div>

          <div className="bg-zinc-900/60 p-8 rounded-3xl border border-white/5 backdrop-blur-md hover:scale-[1.02] transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Why we built this?
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              We often forget great recipes or lose them after scribbling on
              scraps of paper. SwaadScript is the digital solution — fast,
              clean, and premium — yet completely free.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-zinc-500 italic text-sm md:text-base">
        <p>Made with ❤️ for food lovers and developers.</p>
      </div>
    </div>
  );
};

export default About;
