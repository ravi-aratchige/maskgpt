"use client";

import { useState, useRef, SetStateAction } from "react";
import { maskText } from "@/utilities/mask";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { removeCommaBeforeAnd } from "@/utilities/comma";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  // state for original text
  const [originalText, setOriginalText] = useState("");

  // state for masked text
  const [maskedText, setMaskedText] = useState("");

  // state to track button text
  const [buttonText, setButtonText] = useState("Mask Text");

  // reference to "Masked Text" textarea
  const maskedTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // reference to remove focus from textarea
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  // toast component
  const { toast } = useToast();

  const handleMaskText = () => {
    if (buttonText === "Mask Text") {
      // remove any commas appearing right before the word "and"
      const textWithoutCommaBeforeAnd = removeCommaBeforeAnd(originalText);

      // mask the processed text with Cyrillic characters
      const finalText = maskText(textWithoutCommaBeforeAnd);

      // render the masked text in the "Masked Text" textarea
      setMaskedText(finalText);

      // update the state of the button text
      setButtonText("Copy Text");
    } else if (buttonText === "Copy Text") {
      // copy text from the "Masked Text" textarea to the clipboard
      maskedTextAreaRef.current?.select();
      document.execCommand("copy");

      // remove focus from the textarea
      hiddenInputRef.current?.focus();

      // log the masked text to the console (for debugging)
      console.log(`Masked text: ${maskedText}`);

      // display a toast message (after copying to clipboard)
      toast({ description: "Copied masked text to clipboard" });
    }
  };

  // listen to changes happening to original text
  const handleOriginalTextChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setOriginalText(e.target.value);

    // reset button text to "Mask Text"
    setButtonText("Mask Text");
  };

  return (
    <main className="flex flex-col absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
      {/* Header */}
      <header className="w-full top-0 left-0 flex justify-between p-5">
        <div>
          <p className="font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Mask
            </span>
            GPT
          </p>
        </div>
        <div>
          <a href="/about" className="px-8">
            About
          </a>
          <a
            href="https://github.com/ravi-aratchige/maskgpt"
            target="_blank"
            rel="noopener"
          >
            Github
          </a>
        </div>
      </header>

      {/* Page Content */}

      <section className="flex-grow">
        {/* Introduction */}
        <h1 className="text-6xl font-extrabold tracking-tight lg:text-8xl text-center pt-14">
          Copy Like A{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Pro
          </span>
        </h1>
        <section className="flex justify-center pb-16 pt-24 px-8">
          <p className="text-center">
            Disguise text taken from the Internet to avoid detection by
            plagiarism checkers like Turnitin!
          </p>
        </section>

        {/* Text areas */}
        <section className="flex justify-center px-8">
          {/* Original text */}
          <div className="grid w-full gap-1.5 px-2">
            <div className="flex justify-between">
              <Label htmlFor="original-text">Original Text</Label>
            </div>
            <Textarea
              placeholder="Type your original text here."
              id="original-text"
              className="h-80 resize-none"
              value={originalText}
              onChange={handleOriginalTextChange}
            />
          </div>
          {/* Masked text */}
          <div className="grid w-full gap-1.5 px-2">
            <div className="flex justify-between">
              <Label htmlFor="masked-text">Masked Text</Label>
            </div>
            <Textarea
              placeholder="The masked text will be generated here."
              id="masked-text"
              className="h-80 resize-none"
              value={maskedText}
              readOnly
              ref={maskedTextAreaRef}
            />
            {/* Hidden input */}
            <input
              type="text"
              style={{ position: "absolute", left: "-9999px" }}
              ref={hiddenInputRef}
            />
          </div>
        </section>

        {/* "Mask Text" Button */}
        <div className="flex flex-col items-center justify-between p-6">
          <Button
            onClick={handleMaskText}
            variant={buttonText === "Copy Text" ? "outline" : undefined}
          >
            {buttonText}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bottom-0 left-0 flex justify-center w-full py-6">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/ravi-aratchige"
            className="hover:font-bold"
            target="_blank"
            rel="noopener"
          >
            Ravindu Aratchige
          </a>
        </p>
      </footer>
    </main>
  );
}
