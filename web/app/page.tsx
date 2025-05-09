import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Hello, TailwindCSS is working!</h1>
      <p className="text-lg text-gray-700">Edit <code>app/page.tsx</code> to get started.</p>
    </main>
  );
}
