const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Dev Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Learn more about me, check my{" "}
        <a
          href="https://www.ahmedzrouqui.com/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          portfolio
        </a>
        .
      </h4>
    </section>
  );
};

export default Intro;
