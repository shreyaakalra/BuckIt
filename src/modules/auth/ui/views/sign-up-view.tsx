"use client"

import { useForm } from "react-hook-form";
import z from "zod";
import { registerSchema } from "../../schemas";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

  
export const SignUpView = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            username: ""
        }
    });

    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        console.log(values);
    }

    return (
        <div className="grid grid-cold-1 lg:grid-cols-5">
            <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-8 p-4 lg:p-16"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/">
                            <span className={cn("text-2xl font-semibold", poppins.className)}>
                                BuckIt
                            </span>
                            </Link>
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-base border-none underline"
                            >
                              <Link prefetch href="/sign-in">
                                Sign in
                              </Link>  
                            </Button>
                        </div>

                    </form>
                    
                </Form>
            </div>
            <div 
                className="h-screen w-full lg:col-span-2 hidden lg:block"
                style={{
                    backgroundImage: "url('/authBG.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                Background column
            </div>
        </div>
    )
}