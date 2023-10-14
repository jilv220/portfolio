import OAuthBtns from "@/components/oauth-btns";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default async function LoginPage() {
  return (
    <div className="container">
      <div className="mt-6 flex flex-col items-center justify-center">
        <Card className="md:w-[40%]">
          <CardHeader className="space-y-0">
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <div className="text-muted-foreground">continue with: </div>
          </CardHeader>
          <CardFooter className="w-full flex-col">
            <OAuthBtns></OAuthBtns>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
