import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10">
        <Search />
        <h1>Hello</h1>
      </main>
    </>
  );
};

export default Home;
