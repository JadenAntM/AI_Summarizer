const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex flex-col items-end w-full mb-10 pt-3">
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/JadenAntM?tab=repositories")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue1_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Summarize Your Articles!</h2>
    </header>
  );
};

export default Hero;
