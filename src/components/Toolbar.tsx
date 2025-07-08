"use client";
import { useDrag } from "react-dnd";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const items = [
  // Tops
  { id: "top1", type: "top", src: "/tops/top1.webp" },
  { id: "top2", type: "top", src: "/tops/top2.jpg" },
  { id: "top3", type: "top", src: "/tops/top3.jpg" },
  { id: "top4", type: "top", src: "/tops/top4.png" },
  { id: "top5", type: "top", src: "/tops/top5.png" },

  // Bottoms
  { id: "bottom1", type: "bottom", src: "/bottoms/bottom1.webp" },
  { id: "bottom2", type: "bottom", src: "/bottoms/bottom2.webp" },
  { id: "bottom3", type: "bottom", src: "/bottoms/bottom3.jpg" },
  { id: "bottom4", type: "bottom", src: "/bottoms/bottom4.png" },
  { id: "bottom5", type: "bottom", src: "/bottoms/bottom5.png" },

  // Shoes
  { id: "shoes1", type: "shoes", src: "/shoes/shoes1.webp" },
  { id: "shoes2", type: "shoes", src: "/shoes/shoes2.webp" },
  { id: "shoes3", type: "shoes", src: "/shoes/shoes3.jpg" },
  { id: "shoes4", type: "shoes", src: "/shoes/shoes4.jpg" },
  { id: "shoes5", type: "shoes", src: "/shoes/shoes5.png" },

  // Accessories
  { id: "belt", type: "accessory", src: "/accessories/belt.jpg" },
  { id: "belt2", type: "accessory", src: "/accessories/belt2.webp" },
  { id: "cap", type: "accessory", src: "/accessories/cap.png" },
  { id: "hat", type: "accessory", src: "/accessories/hat.png" },
  { id: "sunglasses", type: "accessory", src: "/accessories/sunglasses.jpg" },
];

const categories = ["top", "bottom", "shoes", "accessory"];

export default function Toolbar() {
  const [active, setActive] = useState("top");

  const filtered = items.filter((item) => item.type === active);

  return (
    <aside className="w-60 bg-gray-500 p-4 border-r-2 flex flex-col">
      <h3 className="text-lg font-bold mb-4">Clothing Items</h3>

      <div className="flex gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-2 py-1 text-sm rounded ${
              active === cat ? "bg-green-600 text-white" : "bg-black"
            }`}
            onClick={() => setActive(cat)}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-1">
        {filtered.map((item) => (
          <DraggableClothing key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
}

function DraggableClothing({ item }: { item: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [, drag] = useDrag(() => ({
    type: "clothing",
    item,
  }));

  useEffect(() => {
    if (ref.current) drag(ref.current);
  }, [drag]);

  return (
    <div ref={ref} className="cursor-move">
      <Image src={item.src} alt={item.type} width={60} height={60} />
    </div>
  );
}
