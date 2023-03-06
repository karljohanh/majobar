export default function InfoSection() {
  return (
    <div className="min-w-[70%] text-center flex flex-col lg:w-[50%] max-w-[80vw] sm:max-w-[70vw] mx-auto justify-center items-center my-12">
      <h2 className="tracking-[0.1rem] lg:tracking-[0.3rem]">
        MAJO BAR LIGGER I HJÄRTAT AV TROLLHÄTTAN
      </h2>
      <p>
        Vår idé är att fylla bordet med mat och dryck. Det är kärleken och
        gemenskapen kring matbordet som står i centrum. Det handlar inte om vem
        som äter vad, utan vad vi äter tillsammans. Vi ser det som en
        självklarhet att vår mat är tillagad från grunden.
      </p>
      <p>VÄLKOMMEN TILL MAJOFAMILJEN!</p>
      <a href="#menu">
        <button className="btn border border-black mt-8">MENY</button>
      </a>
    </div>
  );
}
