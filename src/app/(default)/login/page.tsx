import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  return (
    <div className="container">
      <div className="mt-6 flex flex-col items-center justify-center">
        <h1 className="mb-2 text-[2.5rem] font-medium leading-[1.1]">
          Sign In
        </h1>
        <p className="mb-4">
          <Link href="/register" className="text-primary hover:underline">
            {" "}
            Need an account?
          </Link>
        </p>
        <form className="w-full md:max-w-[40%]">
          <fieldset>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="mb-4 px-6 py-4 text-base"
              required
            ></Input>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="mb-4 px-6 py-4 text-base"
            ></Input>
          </fieldset>
          <Button
            className="float-right px-6 py-4 text-base"
            size="lg"
            type="submit"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
