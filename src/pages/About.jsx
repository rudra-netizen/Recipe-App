const About = () => {
  return (
    <div className="w-full py-10">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4">
          Hamari <span className="text-red-500">Kahani.</span>
        </h1>
        <p className="text-zinc-400 text-xl border-l-4 border-red-500 pl-4">
          Code aur Khane ka ek anokha sangam.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5">
          <h2 className="text-2xl font-bold mb-4 text-white">What is it?</h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            "SwaadScript is a simple platform designed for those who want to
            keep their cooking recipes safely in one place. Here, you can easily
            add your own recipes, mark them as favorites, and update or delete
            them whenever you choose."
          </p>
        </div>

        <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5">
          <h2 className="text-2xl font-bold mb-4 text-white">
            why we build this?
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            "We often forget great recipes or lose them after scribbling them on
            scraps of paper. SwaadScript is the digital solution to this
            problem. It’s fast, clean, and offers a premium experience—all for
            free."
          </p>
        </div>
      </div>

      <div className="mt-16 text-center text-zinc-500 italic">
        <p>Made with ❤️ for food lovers and developers.</p>
      </div>
    </div>
  );
};

export default About;
