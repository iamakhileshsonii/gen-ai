
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";


const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

 const LoginForm = ()=> {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Login Values: ", values);
  };

  return (
    
      // <Form {...form}>
      //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      //     <FormField
      //       control={form.control}
      //       name="email"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Email</FormLabel>
      //           <FormControl>
      //             <Input placeholder="email@example.com" {...field} />
      //           </FormControl>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //     <FormField
      //       control={form.control}
      //       name="password"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Password</FormLabel>
      //           <FormControl>
      //             <Input type="password" placeholder="Password" {...field} />
      //           </FormControl>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //     <Button type="submit">Login</Button>
      //   </form>
      // </Form>

      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}


export default LoginForm