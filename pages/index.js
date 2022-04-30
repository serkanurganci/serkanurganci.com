import Image from "next/image";
import Social from "../components/Social";
export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto h-full dark:bg-black">
      <div className="flex justify-center items-center gap-10 mt-12">
        <Image
          src="/photos/PP.jpeg"
          className="rounded-full"
          alt="pp"
          width={900}
          height={1200}
        />
        <div className="space-y-6">
          <h1 className="text-3xl">
            {" "}
            <p>Merhaba.</p> <p>Ben Serkan Urgancı.</p>
          </h1>
          <p className="text-gray-500">
            Eskişehir`de yaşayan bir front-end geliştiricisiyim. Front-end
            teknolojileri ile yakından ilgileniyorum. Ayrıca tam bir fitness
            aşığıyım. :)
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
}
