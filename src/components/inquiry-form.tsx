"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Inquiry, inquiryFormSchema } from "@/schemas/inquiryForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text } from "./ui/typography";
import { useToast } from "./ui/use-toast";

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inquiry>({
    resolver: zodResolver(inquiryFormSchema),
  });

  const { toast } = useToast();

  const onInquirySubmit = async (data: Inquiry) => {
    const res = await fetch(`/api/inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((e: Error) => e);

    if (res instanceof Error || res.status === 400) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "There was a problem with your request.",
      });
    } else {
      toast({
        variant: "success",
        title: "Success",
        description: "Email Sent. I will be in contact within 48 hrs.",
      });
    }

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onInquirySubmit)}
        id="inquiry-form"
        className="mt-6 space-y-2 leading-7"
      >
        <div className="flex flex-row space-x-2">
          <div className="basis-1/2 space-y-1">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>{" "}
            </Label>
            <Input type="text" id="name" {...register("name")} />
            <Text className="text-destructive" role="alert">
              {errors.name?.message as string}
            </Text>
          </div>
          <div className="basis-1/2 space-y-1">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>{" "}
            </Label>
            <Input id="email" {...register("email")} />
            <Text className="text-destructive" role="alert">
              {errors.email?.message as string}
            </Text>
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>{" "}
          </Label>
          <Textarea
            className="min-h-[6rem]"
            id="message"
            {...register("message")}
          />
          <Text className="text-destructive" role="alert">
            {errors.message?.message as string}
          </Text>
        </div>
      </form>
      <Button
        className="my-6 rounded-3xl w-1/3 flex self-center mb-32"
        type="submit"
        form="inquiry-form"
      >
        Submit
      </Button>
    </>
  );
}
