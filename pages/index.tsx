import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { downloadInvoice } from "../helpers";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleClick = async () => {
    const {
      data: { uri },
    } = await axios.get("/api/invoice");

    downloadInvoice(uri, "invoice.pdf");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={handleClick}>Download Invoice</button>
      </main>
    </div>
  );
};

export default Home;
