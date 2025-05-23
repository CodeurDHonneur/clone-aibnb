
import CardList from "../Components/CardList"
import Categories from "../Components/Categories"
import Footer from "../Components/Footer"
import LinksHome from "../Components/LinksHome"
import Nav from "../Components/Nav"
import Search from "../Components/Search"

export default function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <CardList />
      <LinksHome />
      <Footer />
    </>

  )
}
