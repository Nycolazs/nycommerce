import { MenuBar } from "@/components";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Brandstore</title>
      </Head>
      <MenuBar />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "85vh" }}>
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  )
}