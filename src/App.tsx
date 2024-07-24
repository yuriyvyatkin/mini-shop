import Layout from "@/components/common/Layout";
import Production from "@/components/Production";
import Contacts from "@/components/Contacts";
import styles from "./App.module.scss";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Production />
        <Contacts />
      </Layout>
    </div>
  );
}

export default App;
