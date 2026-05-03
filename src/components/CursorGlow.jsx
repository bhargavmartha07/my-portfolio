import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 60%)`,
      }}
    />
  );
}

export default CursorGlow;