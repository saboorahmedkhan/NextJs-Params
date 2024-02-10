
import Link from "next/link";
export default function Home() {
  
  return (
    <main className="flex justify-center items-center flex-col p-24">
      <h1 className="text-[36] mb-6">Params</h1>
      <ul>
        <li><Link href="/saboor">saboor</Link></li>
        <li><Link href="/nida">nida</Link></li>
        <li><Link href="/123">123</Link></li>
      </ul>
    </main>
  );
}
