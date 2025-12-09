"use client"

import LoginForm from "@/components/signin/LoginForm"
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Siginpage(){
       const { data, isPending } = authClient.useSession();
       const router = useRouter();
     
       useEffect(() => {
         if (!isPending && !data?.session && !data?.user) {
           router.push("/sign-in");
         }
       }, [data, isPending, router]);
     
       if (isPending) {
         return (
           <div className="flex flex-col items-center justify-center h-screen">
             <Spinner />
           </div>
         );
       }

       if(data?.session && data?.user){
         router.push("/");
       }
     return(
     <>
     <LoginForm />
     </>
     )
}