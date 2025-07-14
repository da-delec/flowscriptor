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
const Admin_dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

if(!session?.user.isAdmin){
  redirect("/auth/sign-in")
}

const items = await prisma.user.findMany({
  orderBy:{
    name:"desc"
  }
})

  return (
    <div className=' h-[91vh] w-screen'>
       <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Balance</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {items.map((item) => (
            <TableRow
              key={item.id}
              className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent"
            >
              <TableCell className="py-2.5 font-medium">{item.name}</TableCell>
              <TableCell className="py-2.5">{item.email}</TableCell>
              <TableCell className="py-2.5">{item.isAdmin}</TableCell>
              
           
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            
        
          </TableRow>
        </TableFooter>
      </Table>
 
      
    </div>
  )
}

export default Admin_dashboard
