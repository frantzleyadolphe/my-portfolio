import logo from "../assets/logo.png";
export default function Home() {
  return (
    <div className="m-0 p-0 bg-white">
      <div className="mx-20 h-16  flex flex-row justify-between items-center">
        <img src={logo} alt="logo" className="h-14" />
        <h2>React</h2>
      </div>
    </div>
  );
}
