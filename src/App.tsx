import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Timeline from "./components/Timeline";
import Action from "./components/Action";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Timeline />
        <Action />
      </main>
      <Footer />
    </>
  );
}
