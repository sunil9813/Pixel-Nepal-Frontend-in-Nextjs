import { Footer } from "@/components/footer/Footer"
import { SellContentHeader } from "@/routes"
import React from "react"

export const SellContentLayout = ({ children }) => {
  return (
    <>
      <SellContentHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}
