// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full top-0 left-0 flex justify-between p-5">
        <div>MaskGPT</div>
        <div>
          <a href="/about" className="px-8">
            About
          </a>
          <a
            href="https://github.com/ravi-aratchige"
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
        <section className="flex justify-center pb-16 pt-24">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quia veniam alias, ex, ullam sit at perferendis nemo maxime.
          </p>
        </section>

        {/* Text areas */}
        <section className="flex justify-center px-8">
          {/* Original text */}
          <div className="grid w-full gap-1.5 px-2">
            <Label htmlFor="original-text">Original Text</Label>
            <Textarea
              placeholder="Type your original text here."
              id="original-text"
              className="h-80"
            />
          </div>
          {/* Masked text */}
          <div className="grid w-full gap-1.5 px-2">
            <Label htmlFor="masked-text">Masked Text</Label>
            <Textarea
              placeholder="The masked text will be generated here."
              id="masked-text"
              className="h-80"
            />
          </div>
        </section>

        {/* "Mask Text" Button */}
        <div className="flex flex-col items-center justify-between p-6">
          <Button>Mask Text</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bottom-0 left-0 flex justify-center w-full py-6">
        <p>Made with love!</p>
      </footer>
    </main>
  );
}
