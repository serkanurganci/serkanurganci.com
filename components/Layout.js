import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="h-full">{children}</main>
      <div className="text-sm fixed bottom-2 left-1/2 -translate-1/2 text-gray-400">
        ©2022 Serkan Urgancı
      </div>
    </div>
  );
}
