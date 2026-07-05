import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

interface WorkSpacePageProps {
  searchParams: Promise<{ prompt?: string; id?: string }>;
}

const WorkSpacePage = async ({ searchParams }: WorkSpacePageProps) => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const { prompt, id } = await searchParams;

  return (
    <div>
      <p>
        Workspace - prompt: {prompt},id:{id}
      </p>
    </div>
  );
};

export default WorkSpacePage;
