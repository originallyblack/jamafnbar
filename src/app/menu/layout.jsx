import Menuhero from "../components/menuhero";

export default function layout({ children }) {
  return (
    <div>
      <Menuhero />

      {children}
    </div>
  );
}
