import TopBar from "../../TopBar";

export default function Layout({ children }) {
  return (
    <main>
      <TopBar />
      {children}
    </main>
  );
}
