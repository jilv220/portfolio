import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

import { Text } from "./ui/typography";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  liveLink?: string;
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  liveLink,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="py-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>{description}</Text>
        <ul className="pt-1">
          {tags.map((tag, i) => (
            <Badge
              className={cn(i === tags.length - 1 && "mr-0", "mr-1 mb-1")}
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="space-x-2">
        {liveLink && (
          <Link
            href={liveLink}
            className={buttonVariants({ variant: "default" })}
          >
            Live Demo
          </Link>
        )}
        <Link href={link} className={buttonVariants({ variant: "default" })}>
          Github
        </Link>
      </CardFooter>
    </Card>
  );
}
