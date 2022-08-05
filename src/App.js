import Gallery from "./components/Gallery";
import PrimaryHeader from "./components/PrimaryHeader";
import ProductDetails from "./components/ProductDetails";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <PrimaryHeader />
      <main className={styles.product}>
        <Gallery />
        <ProductDetails />
      </main>
    </div>
  );
}

export default App;
