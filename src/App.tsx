import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const targets: HTMLElement[] = [];
    document
      .querySelectorAll<HTMLElement>(
        "main > section:not(:first-child) > .container-x > *, main > article > .container-x > *",
      )
      .forEach((el) => {
        const cls = el.className.toString();
        const isGrid = /\bgrid\b/.test(cls) && !cls.includes("overflow-x-auto");
        if (isGrid && el.children.length > 1) {
          Array.from(el.children).forEach((c, i) => {
            (c as HTMLElement).style.setProperty("--d", `${Math.min(i, 5) * 90}ms`);
            targets.push(c as HTMLElement);
          });
        } else {
          targets.push(el);
        }
      });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((t) => {
      t.classList.add("reveal");
      io.observe(t);
    });
    return () => io.disconnect();
  }, []);
}
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
  useReveal();
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
