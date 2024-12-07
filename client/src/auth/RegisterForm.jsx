import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";


const RegisterForm = () => {
 

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register Yourself</CardTitle>
        <CardDescription>
          Enter your details to register yourself
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Akhilesh Soni"
              required
            />
          </div>
         
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        
        </div>
        <div className="mt-4 text-center text-sm">
         Already have an account?{" "}
          <Link href="#" className="underline">
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
