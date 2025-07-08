"use client";
import Canvas from "@/components/Canvas";
import Toolbar from "@/components/Toolbar";
import DndWrapper from "@/components/DndWrapper";

export default function BuilderPage() {
  return (
    <DndWrapper>
      <main className="flex h-screen">
        <Toolbar />
        <Canvas />
      </main>
    </DndWrapper>
  );
}
