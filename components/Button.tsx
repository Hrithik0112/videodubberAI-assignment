import Link from "next/link";
import React from "react";

function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <div className="flex justify-center items-center text-2xl font-bold px-12 py-4 mb-8 bg-blue-600 hover:bg-blue-700 transition-colors text-white h-16 cursor-pointer border rounded-lg">
      <Link href="/submit">{children}</Link>
    </div>
  );
}

export default Button;
