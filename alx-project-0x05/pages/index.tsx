import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to StateCraft!</h1>
      <Link href="/counter-app" className="bg-blue-500 text-white py-3 px-6 rounded">
        Go to Counter App
      </Link>
    </div>
  );
}
