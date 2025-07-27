import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { IoMdArrowBack, IoMdCopy } from "react-icons/io";
import Link from 'next/link';
import CopyButton from './CopyButton';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-indigo-700/30 text-indigo-300 text-xs font-semibold px-2 py-0.5 rounded-full mr-2 mb-1">
    {children}
  </span>
);

const Script_description = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const script = await prisma.script.findUnique({
    where: {
      Id: id
    },
    select: {
      Title: true,
      Script: true,
      Category: true,
      CreatedAt: true,
    }
  });

  const dateFormat = script?.CreatedAt
    ? new Date(script.CreatedAt).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : '';

  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 flex flex-col items-center justify-center py-10 px-2 md:px-8">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <Link href="/user_dashboard/script_history" className="group">
            <Button className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-full shadow transition p-2">
              <IoMdArrowBack className="text-xl group-hover:-translate-x-1 transition" />
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-300 flex-1 truncate" title={script?.Title}>{script?.Title}</h1>
        </div>
        <div className="flex items-center gap-3 mb-2">
          {script?.Category && <Badge>{script.Category}</Badge>}
          {dateFormat && <span className="text-xs text-slate-400">{dateFormat}</span>}
        </div>
        {/* Bloc script */}
        <div className="relative bg-slate-900/90 border border-slate-800/60 rounded-2xl shadow-xl p-6 min-h-[200px] flex flex-col">
          <CopyButton scriptText={script?.Script || ''} />
          <pre className="whitespace-pre-wrap break-words font-mono text-slate-100 text-base md:text-lg">
            {script?.Script}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Script_description
