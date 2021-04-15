import Login from "../components/Login";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-simple.ico" />
      </Head>

      <Login />
    </>
  );
}
