const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex flex-col items-end w-full mb-10 pt-3">
        <button
          type="button"
          onClick={() => window.open("https://github.com/JadenAntM")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        One Paragraph Article Summarizer <br className="max-md:hidden" />
        <span className="purple1_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Summarize Any Article To One Paragraph!</h2>
    </header>
  );
};

export default Hero;
