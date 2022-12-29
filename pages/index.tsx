import { Inter } from "@next/font/google";
import Webcam from "react-webcam";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Webcam />
    </div>
  );
}
