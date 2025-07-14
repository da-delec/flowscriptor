'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { DialogDemo } from './modal_save';
import { TypingAnimation } from '../magicui/typing-animation';

const Script_ = ({ script }: { script: string }) => {
  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="relative w-full max-h-[600px] min-h-[300px] overflow-y-auto rounded-2xl bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 p-6 mb-6 animate-fade-in transition-all">
        <div className="prose prose-sm md:prose-base text-gray-800 whitespace-pre-wrap font-normal leading-relaxed">
          <TypingAnimation duration={0.25} className="text-start text-sm">
            {script}
          </TypingAnimation>
        </div>

        {/* Scroll fade shadow at bottom (optional) */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>

      <DialogDemo scriptprops={script} />
    </div>
  );
};

export default Script_;
