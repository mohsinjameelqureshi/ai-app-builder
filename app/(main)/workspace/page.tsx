import WorkspaceClient from "@/components/WorkspaceClient";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface WorkSpacePageProps {
  searchParams: Promise<{ prompt?: string; id?: string }>;
}

const WorkSpacePage = async ({ searchParams }: WorkSpacePageProps) => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const { prompt, id } = await searchParams;

  return (
    <WorkspaceClient
      intialPrompt={prompt ?? null}
      userCredits={10}
      userId={userId}
      userPlan="free"
    />
  );
};

export default WorkSpacePage;
