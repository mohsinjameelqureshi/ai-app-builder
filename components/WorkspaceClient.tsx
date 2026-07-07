"use client";

import React, { useCallback, useState } from "react";
import { CodePanel } from "./CodePanel";
import { FileData, Message, StatusStep } from "@/types/workspace";
import ChatPanel from "./ChatPanel";

interface WorkspaceClientProp {
  intialPrompt: string | null;
  userCredits: number;
  userId: string;
  userPlan: string;
}

const WorkspaceClient = ({
  intialPrompt,
  userCredits,
  userId,
  userPlan,
}: WorkspaceClientProp) => {
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [credits, setCredits] = useState(userCredits);

  const [isGenerating, setIsGenerating] = useState(false);
  const [statusLog, setStatusLog] = useState<StatusStep[]>([]);
  const [fileData, setFileData] = useState<FileData | null>(null);

  const handleFilePatch = useCallback((patches: FileData) => {
    setFileData(patches);
  }, []);

  const handleGenerate = useCallback(
    async (prompt: string, imageUrl?: string) => {},
    [credits, isGenerating, userId],
  );
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-[#0a0a0a]">
      {/* chat panel - left */}
      <ChatPanel
        messages={messages}
        isGenerating={isGenerating}
        isImproving={false}
        statusLog={statusLog}
        credits={credits}
        intialPrompt={intialPrompt}
        onGenerate={handleGenerate}
        userId={userId}
        workspaceId={workspaceId}
        appTitle={"forge ai"}
      />

      {/* code panel - right */}
      <CodePanel
        fileData={fileData}
        isGenerating={isGenerating}
        statusLog={statusLog}
        onFilePatch={handleFilePatch}
      />
    </div>
  );
};

export default WorkspaceClient;
