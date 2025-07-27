"use client"

import React from 'react'
import { Button } from '../ui/button'
import { FaPrint } from "react-icons/fa";
import { toast } from 'sonner';


const PdfButton = ({script}:{script:string}) => {
  // Nouvelle fonction pour permettre à l'utilisateur d'imprimer le script sans utiliser document.write
  function imprimerScript(script: string) {
    if (!script || script.trim() === "") {
      toast.error("Aucun script à imprimer.");
      return;
    }
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const doc = printWindow.document;
      const htmlContent = doc.createElement('html');
      const head = doc.createElement('head');
      const style = doc.createElement('style');
      style.textContent = `
        body { font-family: Arial, sans-serif; margin: 40px; color: #222; }
        pre { white-space: pre-wrap; word-break: break-word; font-size: 1.1em; }
      `;
      head.appendChild(style);

      const body = doc.createElement('body');
      const h2 = doc.createElement('h2');
      h2.textContent = "Script généré";
      const pre = doc.createElement('pre');
      pre.textContent = script;

      body.appendChild(h2);
      body.appendChild(pre);

      htmlContent.appendChild(head);
      htmlContent.appendChild(body);

      doc.body.innerHTML = ""; // Nettoyer le body
      doc.body.appendChild(h2);
      doc.body.appendChild(pre);

      // Attendre que le contenu soit bien rendu avant d'imprimer
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 200);
    } else {
      toast.error("Impossible d'ouvrir la fenêtre d'impression.");
    }
  }
  return (
    <Button variant={"outline"} className=' cursor-pointer md:right-24 md:top-[100px] lg:right-36 absolute bg-gradient-to-br h-9 w-9  rounded-lg from-blue-600 to-indigo-600 border-none top-[85px] text-white right-6' onClick={() => imprimerScript(script)}><FaPrint className='w-4 h-4' /></Button>
  )
}

export default PdfButton
