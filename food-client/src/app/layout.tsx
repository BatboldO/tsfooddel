import { Header } from "@/components";
import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider, BasketProvider } from "@/context";
import { FoodProvider } from "@/context/FoodProvider";
import { DrawerLocation } from "@/components/pages/DrawerLocation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <FoodProvider>
              <BasketProvider>
                <Header />
                <DrawerLocation/>
                {children}
                <Footer />
                <ToastContainer />
              </BasketProvider>
            </FoodProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
