export default function Hero({ ImgRoute }) {
  return (
    <section className="hero">
      <div className={`hero__img ${ImgRoute}`} />
    </section>
  );
}
