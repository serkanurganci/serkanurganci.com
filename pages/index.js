import Image from "next/image";
import Social from "../components/Social";
export default function Home() {
  return (
    <div>
      <div className="container-small flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="flex rounded-full bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <Image
            src="/photos/PP.jpeg"
            className="rounded-full object-cover"
            alt="pp"
            width={900}
            height={900}
          />
        </div>
        <div className="space-y-6 text-center sm:text-left">
          <h1 className="text-3xl">
            {" "}
            <p>Merhaba.</p> <p>Ben Serkan Urgancı.</p>
          </h1>
          <p className="text-gray-500">
            Eskişehir`de yaşamakta olan bir front-end geliştiricisiyim.
            Front-end teknolojileri ile yakından ilgileniyorum. Ayrıca yaklaşık
            olarak 7 yıldır vücut geliştirme ile uğraşmaktayım.
          </p>
          <Social />
        </div>
      </div>
      <div className="container-large mt-4 sm:mt-20">
        <Image
          src="/photos/setup.jpeg"
          alt="Serkan Urganci"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </div>
    </div>
  );
}
