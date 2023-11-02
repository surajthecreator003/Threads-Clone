import { ClerkProvider } from "@clerk/nextjs";
import {Inter} from "next/font/google";

import "../globals.css"

//this metadata improves SEO
export const metadata={
   title:'Threads-Clone',
   description:"A Next.js 13.5 mEta Threads Application"
}


const inter=Inter({subsets:["latin"]})

export default function Rootlayout({children}:{children:React.ReactNode}){

    return(<ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>

            </body>
        </html>

      </ClerkProvider>)
}