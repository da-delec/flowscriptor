import React from 'react'
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { FaArrowUp, FaTrash } from 'react-icons/fa';
import UpgradeUserAction from './upgrade_user_action';
import DeleteUserAction from './delete_user_action';


const Admin_dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })

  if (!session?.user.isAdmin) {
    redirect("/auth/sign-in")
  }

  const items = await prisma.user.findMany({
    orderBy: {
      name: "desc"
    }
  })

  return (
    <div className="min-h-[91vh] w-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 py-10 px-2 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center drop-shadow">Admin Dashboard</h1>
        <Table className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950">
          <TableHeader className="bg-slate-900">
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="hover:bg-slate-900/60 transition">
                <TableCell className="py-3 font-medium text-slate-100">{item.name}</TableCell>
                <TableCell className="py-3 text-slate-300">{item.email}</TableCell>
                <TableCell className="py-3 text-white text-center">{item.isAdmin ? 'Oui' : 'Non'}</TableCell>
                <TableCell className="py-3 text-white text-center">{item.plan}</TableCell>
                <TableCell className="py-3 flex gap-2 justify-center">
                  <UpgradeUserAction userId={item.id} currentPlan={item.plan} />
                  <DeleteUserAction userId={item.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Admin_dashboard
