const AboutUs = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-6 px-6 py-6 text-center">
      <div>
        <p className="text-2xl font-bold">Technology</p>
      </div>
      <p className="mx-auto w-3/5 border-b border-stone-600 pb-3 text-lg font-bold">
        Client
      </p>
      <ul className="flex flex-col gap-2">
        <li>React (TypeScript)</li>
        <li>Redux</li>
        <li>Tailwind</li>
      </ul>
      <p className="mx-auto w-3/5 border-b border-stone-600 pb-3 text-lg font-bold">
        Server
      </p>
      <ul className="flex flex-col gap-2">
        <li>NodeJS (TypeScript)</li>
        <li>Express</li>
      </ul>
      <p className="mx-auto w-3/5 border-b border-stone-600 pb-3 text-lg font-bold">
        Database
      </p>
      <ul className="flex flex-col gap-2">
        <li>MongoDB</li>
      </ul>
      <p className="mx-auto w-3/5 border-b border-stone-600 pb-3 text-lg font-bold">
        Hosting
      </p>
      <ul className="flex flex-col gap-2">
        <li>Netlify (Client)</li>
        <li>AWS (Server)</li>
      </ul>
    </div>
  );
};

export default AboutUs;
