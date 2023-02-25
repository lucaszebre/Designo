import React from 'react'
import Nav from '../Nav'

import Footer from '../Footer'
import Sidebar from '../Sidebar'
import { createContext } from 'react'
export const DataIndexContext = createContext()


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
        <DataIndexContext.Provider value={{ isOpen, setIsOpen }}>
        <Nav />
        <Sidebar />
        <main>
            {children}
        </main>
        <Footer />
        </DataIndexContext.Provider>
        </>
    )
}

export default Layout
