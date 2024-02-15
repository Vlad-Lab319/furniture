import { createRoot } from "react-dom/client";
import { Loader } from "@react-three/drei";
import Drawings from "./Drawings";

const App = () => {
  return (
    <div
      className="app-container"
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Custom closets</h1>
      <Drawings />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <App />
    <Loader />
  </>,
);
