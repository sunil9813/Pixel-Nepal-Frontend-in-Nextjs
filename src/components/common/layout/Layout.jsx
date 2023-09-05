import { Footer } from "@/components/footer/Footer"
import { Header } from "@/routes"
import React from "react"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
