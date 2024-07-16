import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "Hafla",
  description: "Discover & Share Hafla Events",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
