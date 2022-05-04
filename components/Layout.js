import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-between items-stretch">
      <div>
        <Header />
        <main className="h-full mt-12">{children}</main>
      </div>
      <div className="text-sm text-center text-gray-400">
        ©2022 Serkan Urgancı
      </div>
    </div>
  );
}
