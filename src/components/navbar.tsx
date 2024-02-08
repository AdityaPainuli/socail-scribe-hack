
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./maxWidthWrapper";
import { UserButton } from "@clerk/nextjs";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between w-full   border-b border-zinc-200">
                    <Link href="" className="flex z-40 font-semibold ">Socail<span className="text-blue-600">Scribe</span></Link>
                    {user ? (
                        <Image src={user.picture || ""} alt="user-image" height={40} width={40} className="cursor-pointer" />
                    ) : (
                        <div>
                            <LoginLink>Sign in</LoginLink>

                        </div>
                    )}
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
