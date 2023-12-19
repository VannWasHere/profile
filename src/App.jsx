import NavigationBar from "./Components/NavigationBar";
import AnimationType from "./Components/AnimationType";

export default function App() {
  return (
    <div className="w-full h-full font-lato">
      <header className="h-3/4 flex flex-col justify-around bg-gray-900">
        <NavigationBar></NavigationBar>
        <div className="w-2/3 flex justify-between m-auto h-[45rem]">
          <section className="w-full my-auto text-gray-200">
            <article className="m-auto w-full">
              <p className="p-1 w-36 text-center rounded-xl bg-indigo-500 mb-3 cursor-pointer font-semibold">Justine Donovan</p>
              <AnimationType></AnimationType>
              <p className="mt-3 text-justify tracking-wider text-lg">Hi! I am Justine from Indonesia, learning to become a full-stack developer with current experience in <span className="text-yellow-300">React</span> and <span className="text-red-500">Laravel</span>.</p>
            </article>
          </section>
          <section className="w-full my-auto">
            <img src="src/assets/img.jpg" alt="picture" 
              className="w-2/3 flex ml-auto rounded-3xl"
            />
          </section>
        </div>
      </header>
    </div>
  );
}