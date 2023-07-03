import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, TwitterIcon } from "lucide-react";

interface IContributorTag {
  name: string;
  twitterUser: string;
  githubUser: string;
  contributed: string;
}

export default function ContributorTag({
  name,
  twitterUser,
  githubUser,
  contributed,
}: IContributorTag) {
  const initials = name
    .split(" ")
    .reduce((i) => i.charAt(0).toUpperCase() + i.slice(1), "");

  return (
    <HoverCard>
      <HoverCardTrigger className="bg-opacity-80 bg-black text-white p-2 text-center rounded-lg shadow-lg flex items-center gap-x-4 justify-center">
        <Avatar>
          <AvatarImage src={`https://github.com/${githubUser}.png`} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        {name}&apos;s contribution
      </HoverCardTrigger>
      <HoverCardContent className="bg-black text-zinc-300 w-96">
        <div className="items-center flex gap-x-4">
          <Avatar>
            <AvatarImage src={`https://github.com/${githubUser}.png`} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <a
            href={`https://github.com/igorfelipeduca/sig-bounties`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-lg font-medium">{name}</span>
          </a>
        </div>

        <div className="py-4">
          <span className="text-zinc-400">
            {name} contributed with the task: {contributed}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex items-center gap-x-2 mt-4">
            <CalendarIcon className="h-6 w-6" />
            <span className="text-sm">25/06/2023</span>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${twitterUser}`}
            className="flex items-center gap-x-2 mt-4"
          >
            <TwitterIcon className="h-6 w-6" />
            <span className="text-sm">@{twitterUser}</span>
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
