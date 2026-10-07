import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ForWhom from "./components/ForWhom";
import About from "./components/About";
import Approach from "./components/Approach";
import Steps from "./components/Steps";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Online from "./components/Online";
import Faq from "./components/Faq";
import Location from "./components/Location";
import Emergency from "./components/Emergency";
import Footer from "./components/Footer";
import { PostPage, PostsPage, PostsTeaser } from "./components/Posts";

function Home() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ForWhom />
        <About />
        <Approach />
        <Steps />
        <Services />
        <Testimonials />
        <PostsTeaser />
        <Online />
        <Faq />
        <Location />
        <Emergency />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path.startsWith("/publicacoes")) {
    const slug = path.split("/")[2];
    return (
      <>
        <Header solid />
        <main>{slug ? <PostPage slug={slug} /> : <PostsPage />}</main>
        <Footer />
      </>
    );
  }
  return <Home />;
}
