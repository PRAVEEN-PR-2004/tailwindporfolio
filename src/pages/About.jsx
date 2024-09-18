import aboutimg from '../assets/tailwindimg1.png';


export default function About() {
  return (
    <>
      
      <section className="flex flex-col pt-9 bg-dark md:flex-row">
        <div className="w-full md:w-1/2 ">
          <img src={aboutimg} alt="About me" />
        </div>
        <div className="flex justify-center w-1/2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-5 text-4xl border-b-4 w-[180px]">ABOUT ME</h1>
            <p>Some information about myself</p>
          </div>
        </div>
      </section>
    </>
  );
}
