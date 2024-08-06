import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./HomePage/HomePage"; 
import ChoicePage from "./ChoicePage/ChoicePage";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

