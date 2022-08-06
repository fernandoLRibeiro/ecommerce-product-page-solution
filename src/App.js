import Gallery from "./components/Gallery";
import PrimaryHeader from "./components/PrimaryHeader";
import ProductDetails from "./components/ProductDetails";
import ContextProvider from "./ContextProvider";
import styles from "./styles/App.module.css";
import { reducer } from "./reducer";

function App() {
  return (
    <ContextProvider reducer={reducer}>
      <div className={styles.App}>
        <PrimaryHeader />
        <main className={styles.product}>
          <Gallery />
          <ProductDetails />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
