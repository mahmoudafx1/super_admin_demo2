import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Overview from "./Pages/Overview";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails"; // تأكد من المسار


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<Overview />} />
          <Route path="/category/:categoryType" element={<CategoryDetails />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;