import { HomeScreen, Layout } from "@/routes";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixel Nepal - Download assets</title>
      </Head>
      <Layout>
        <HomeScreen />
      </Layout>
    </>
  );
}
