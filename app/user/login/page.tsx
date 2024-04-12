import { fetchAPI } from "@/app/lib/fetchAPI";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function Login() {
  async function handleSubmit(form: FormData) {
    "use server";

    const email = form.get("email");
    const password = form.get("password");

    const response = await fetchAPI(
      `/user?email=${email}&password=${password}`,
      { method: "GET" }
    );

    const user = await response.json();
    if (user.length > 0) {
      redirect("/user/dashboard");
    }
  }

  return (
    <div className="flex h-full justify-center px-6 py-12 lg:px-8">
      <Card className="sm:mx-auto sm:w-full sm:max-w-sm p-2">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <form className="space-y-5" action={handleSubmit} method="POST">
          <CardContent>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Logar</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
