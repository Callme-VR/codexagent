"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [Isloading, SetIsLoading] = useState(false);
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-5">
        {/* for the image correction and uploade the new image */}

        {/* <Image src={""} alt="login" height={100} width={100} /> */}

        <h1 className="text-6xl font-semibold text-indigo-500">
          Welcome Back to <span className="text-amber-400">CodexAgent</span>
          CLI
        </h1>
        <br />
        <p className="text-base font-medium text-zinc-400">
          Login To your Account for CodexAgent Flow CLI
        </p>
      </div>

      {/* for the logging with card components */}
      <Card className="border-dashed border-2">
        <CardContent className="grid flex-col gap-5">
          <div className="flex flex-col gap-5">
            <Button
              variant={"outline"}
              className="w-full h-full"
              type="button"
              onClick={() =>
                authClient.signIn.social({
                  provider: "github",
                  callbackURL: "http://localhost:3000",
                })
              }
            >
               {/* for the github image svg */}
               <Image src={"/github.png"} alt="github" width={24} height={24} />
               Continue with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
