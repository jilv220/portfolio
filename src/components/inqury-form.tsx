"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function InquryForm() {
  return (
    <>
      <form id="inquiry-form" className="mt-6 space-y-2 leading-7">
        <div className="flex flex-row space-x-2">
          <div className="basis-1/2 space-y-1">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>{" "}
            </Label>
            <Input type="text" id="name" />
          </div>
          <div className="basis-1/2 space-y-1">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>{" "}
            </Label>
            <Input type="email" id="email" />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>{" "}
          </Label>
          <Textarea className="min-h-[6rem]" id="message" />
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
