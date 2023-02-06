export default function InfoSection() {
  return (
    <div className="min-w-[70%] text-center flex flex-col px-12 lg:w-[50%] mx-auto justify-center items-center my-12">
      <h2 className="tracking-[0.1rem] lg:tracking-[0.3rem]">
        MAJO BAR LIGGER I HJÄRTAT AV TROLLHÄTTAN
      </h2>
      <p>
        Vår idé är att fylla bordet med mat och dryck. Det är kärleken och
        gemenskapen kring matbordet som står i centrum. Det handlar inte om vem
        som äter vad, utan vad vi äter tillsammans. Vi ser det som en
        självklarhet att vår mat är lagad från grunden.
      </p>
      <p>VÄLKOMMEN TILL MAJOFAMILJEN!</p>
      <button className="btn border border-black mt-8">
        <a href="#menu">MENY</a>
      </button>
    </div>
  );
}
