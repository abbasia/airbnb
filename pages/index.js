import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Banner></Banner>
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map((item) => (
              <SmallCard {...item} key={item.location}></SmallCard>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData?.map((item) => (
              <MediumCard {...item} key={item.title}></MediumCard>
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        ></LargeCard>
      </main>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const result1 = await fetch("https://links.papareact.com/pyp");
  const exploreData = await result1.json();

  const result2 = await fetch("https://links.papareact.com/zp1");
  const cardsData = await result2.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
