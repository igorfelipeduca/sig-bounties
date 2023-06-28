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
}

export default function ContributorTag({
  name,
  twitterUser,
  githubUser,
}: IContributorTag) {
  return (
    <HoverCard>
      <HoverCardTrigger className="bg-opacity-80 bg-black text-white p-2 text-center rounded-lg shadow-lg flex items-center gap-x-4 max-w-xs justify-center">
        <Avatar>
          <AvatarImage
            src={`https://avatars.githubusercontent.com/u/108759590?v=4`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {name}&apos;s contribution
      </HoverCardTrigger>
      <HoverCardContent className="bg-black text-zinc-300">
        <div className="items-center flex gap-x-4">
          <Avatar>
            <AvatarImage
              src={`https://avatars.githubusercontent.com/u/108759590?v=4`}
            />
            <AvatarFallback>CN</AvatarFallback>
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
            Igor F. Duca contributed with the task: Build a &apos;How does Sig
            works&apos; content section
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
