// files
import CateogryItem from "../components/CateogryItem";
import Hero from "../components/Hero";
import data from "../data/dummyData.json";

export default function Menu() {
  // components
  const MenuList = data.map((item) => (
    <CateogryItem key={item.id} item={item} />
  ));
  return (
    <main>
      <Hero ImgRoute="hero__menu" />
      <section className="menu-list">{MenuList}</section>
    </main>
  );
}
