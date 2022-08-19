export default function Hero({ img, alt, icon, title }) {
  return (
    <section className="hero">
      <div className="hero__img">
        <img src={img} alt={alt} />
        <h1 className="heading-hero">{title}</h1>
        <img src={icon} alt="icon" className="icon" />
      </div>
    </section>
  );
}
