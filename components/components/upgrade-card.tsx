import React from 'react'
import { Button } from '../ui/button';
import { Card,CardContent,CardHeader,CardTitle } from '../ui/card';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { 
 
    
  Crown, 
  X, 
 
  
} from "lucide-react";

const UpgradeCard = ({infos}:{infos:string}) => {
  return (
    <Alert className="border-none  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-none">
          <Crown className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between w-full">
            <span className=' text-slate-50'>
              You're on the free plan. Upgrade to generate unlimited scripts and access advanced templates.
            </span>
            <div className="flex items-center gap-2">
             <Link href={"/user_dashboard/pricing"}>  
              <Button size="sm" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                Upgrade Now
              </Button>
              </Link>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white hover:bg-white/20 p-1"
      
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
  )
}

export default  UpgradeCard;

