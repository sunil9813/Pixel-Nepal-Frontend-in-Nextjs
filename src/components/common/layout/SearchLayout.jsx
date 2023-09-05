import { Footer } from "@/components/footer/Footer"
import { SearchHeader } from "@/components/header/SearchHeader"
import React from "react"

export const SearchLayout = ({ children }) => {
  return (
    <>
      <SearchHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}
