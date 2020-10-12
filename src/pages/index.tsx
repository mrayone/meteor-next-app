import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { Title } from "@/styles/pages/Home";

interface IProduct {
  id: number;
  title: String;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  // const [recommendedProducts, setRecommendedProducts] = useState<
  //   Array<IProduct>
  // >([]);

  // useEffect(() => {
  //   fetch("http://localhost:3333/recommended").then((response) => {
  //     response.json().then((data) => {
  //       setRecommendedProducts(data);
  //     });
  //   });
  // }, []);

  async function handleSum() {
    const match = (await import("../libs/match")).default;
    alert(match.sum(3, 5));
    console.log(process.env.NEXT_PUBLIC_API_URL);
  }

  return (
    <div>
      <SEO
        title="DevCommerce, your amazing dev store"
        shouldExcludeTitleSuffix={true}
      />
      <section>
        <Title>Recommended Products</Title>

        <ul>
          {recommendedProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
        <button onClick={handleSum}>Sum</button>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recommended`
  );
  const recommendedProducts = await response.json();
  return {
    props: {
      recommendedProducts,
    },
  };
};
