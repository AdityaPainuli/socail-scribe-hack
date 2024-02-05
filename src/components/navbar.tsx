"use client"
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./maxWidthWrapper";
import { UserButton } from "@clerk/nextjs";
import { SignInButton, useAuth } from "@clerk/clerk-react";

const Navbar = () => {
    const { userId } = useAuth();
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between w-full   border-b border-zinc-200">
                    <Link href="" className="flex z-40 font-semibold ">Socail<span className="text-blue-600">Scribe</span></Link>
                    <div>
                        {!userId ? (
                            <SignInButton mode="modal" afterSignInUrl="/home">
                                <Button>Sign in</Button>
                            </SignInButton>
                        ) : (
                            <UserButton afterSignOutUrl="/" />
                        )}
                    </div>
                </div>





                {/* <div className="hidden items-center space-x-4 sm:flex ">
                    <>
                        <Link href="#" className={buttonVariants({ variant: "ghost", size: "sm" })}>Pricing</Link>
                        <Link href="#" className={buttonVariants({ variant: "ghost", size: "sm" })}>Pricing</Link>

                    </>
                </div> */}
            </MaxWidthWrapper>
        </nav>
    )

};

export default Navbar;
