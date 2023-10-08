import OAuthBtns from "@/components/oauth-btns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function LoginPage() {
  return (
    <div className="container">
      <div className="mt-6 flex flex-col items-center justify-center">
        <Card className="md:w-[40%]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Need an account?</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="w-full">
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
          </CardContent>
          <CardFooter className="w-full flex-col">
            <div className="relative flex py-5 items-center w-full">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-foreground">OR</span>
              <div className="flex-grow border-t border-border"></div>
            </div>
            <OAuthBtns></OAuthBtns>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
