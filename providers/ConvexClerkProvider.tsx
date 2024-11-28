"use client"


import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";


interface ConvexClerkProviderProps {
    children: React.ReactNode
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

const ConvexClerkProvider = ({ children }: ConvexClerkProviderProps) => {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
  )
}

export default ConvexClerkProvider