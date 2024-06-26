"use client";

import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Context } from "../context/userContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

interface ContextProps {
  userName: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  secret: string;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
}

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

const SignInForm = () => {
  const router = useRouter();
  const context = useContext(Context);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (!context) {
    return null;
  }
  const { setUsername, setSecret } = context;

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setUsername(values.email);
    setSecret(values.password);

    router.push("client/lawyers");

    console.log(values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full sm:w-[70%] md:w-[50] lg:w-[40%] sm:p-8 p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <div className="max-w-md w-full mx-auto">
              <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
                Log Into Gudumaalee
              </div>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-600 block">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="mail@example.com"
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Link href={"/forgotpassword"}>Forgot Password?</Link>
            <Button
              /*className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"*/ className="w-full bg-[#7B3B99] hover:bg-purple-700"
              type="submit"
            >
              Sign in
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignInForm;
