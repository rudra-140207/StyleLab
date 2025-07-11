"use client";
import { useDrop } from "react-dnd";
import { useOutfitStore } from "@/store/outfitStore";
import type { ClothingItem } from "@/store/outfitStore";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const { items, addItem } = useOutfitStore();
  const canvasRef = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop(() => ({
    accept: "clothing",
    drop: (item: ClothingItem, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        addItem({ ...item, x: offset.x, y: offset.y });
      }
    },
  }));

  useEffect(() => {
    if (canvasRef.current) {
      drop(canvasRef.current);
    }
  }, [drop]);

  return (
    <div
      ref={canvasRef}
      className="flex-1 relative bg-gray-900 border-l-2 overflow-hidden"
    >
      {items.map((item, idx) => (
        <Image
          key={idx}
          src={item.src}
          alt={item.type}
          width={80}
          height={80}
          className="absolute"
          style={{ left: item.x, top: item.y }}
        />
      ))}
    </div>
  );
}
