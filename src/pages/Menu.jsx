// files
import CateogryItem from "../components/CategoryItem";
import Hero from "../components/Hero";
import data from "../data/dummyMenu.json";

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
