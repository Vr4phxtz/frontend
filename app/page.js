import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen"
      style={{ backgroundImage: "url('/image/Black.jpg')" }}
    >
      <div className="bg-black/40 min-h-screen"> {/* ชั้นโปร่งดำทับพื้นหลัง (optional) */}
        <h1 className="text-4xl text-center font-mono text-blue-500 p-6">
          
        </h1>
        <Carousel />
        <Card />
      </div>
    </div>
  );
}