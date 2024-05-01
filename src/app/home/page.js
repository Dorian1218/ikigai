"use client"
import { signOut, useSession } from "next-auth/react"
import { UserAuth } from "../context/UserContext"
import Navbar from "../components/Navbar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { addUser, getUser, showUser } from "../auth/method"


function Page() {
    const { user } = UserAuth()
    const router = useRouter()
    console.log(user)
    if (user) {
        console.log(showUser())
        return (
            <div className="flex flex-col items-center">
                <Navbar img={user?.photoURL} />
                <div>
                    <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">Article {index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <p className="text-3xl">Top Stories</p>
            </div>
        )
    }

    else {
        router.push("/")
    }
}

export default Page