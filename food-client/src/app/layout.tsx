import "./globals.css";
import { ThemeProvider } from "@/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FoodCard from "@/components/Card";
import Discount from "@/components/utils/discount"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 200,
        }}
      >
        <Header />
        <FoodCard/>
        <Discount/>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}