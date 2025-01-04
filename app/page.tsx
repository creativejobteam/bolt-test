'use client';
    import { Button } from '@/components/ui/button';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu';
    import { Input } from '@/components/ui/input';
    import { Search } from 'lucide-react';
    import Image from 'next/image';
    import { useState } from 'react';

    export default function Home() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      return (
        <div className="flex flex-col h-screen">
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
              <span className="font-bold text-xl">Notion</span>
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Product
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Features</DropdownMenuItem>
                  <DropdownMenuItem>Templates</DropdownMenuItem>
                  <DropdownMenuItem>Integrations</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Teams
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>For Startups</DropdownMenuItem>
                  <DropdownMenuItem>For Enterprise</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Individuals
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Personal</DropdownMenuItem>
                  <DropdownMenuItem>Pro</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Mac</DropdownMenuItem>
                  <DropdownMenuItem>Windows</DropdownMenuItem>
                  <DropdownMenuItem>iOS</DropdownMenuItem>
                  <DropdownMenuItem>Android</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="sm">
                Pricing
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Request a demo
              </Button>
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button>Get Notion free</Button>
            </div>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center">
            <section className="text-center max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">The happier workspace</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Write. Plan. Collaborate. With a little help from AI.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <Button>Get Notion free</Button>
                <Button variant="outline">Request a demo</Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by teams at
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Affirm_logo.svg/2560px-Affirm_logo.svg.png"
                  alt="Affirm"
                  width={80}
                  height={30}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Remote_logo.svg/2560px-Remote_logo.svg.png"
                  alt="Remote"
                  width={80}
                  height={30}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/1Password_logo.svg/2560px-1Password_logo.svg.png"
                  alt="1Password"
                  width={80}
                  height={30}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Figma_logo.svg/2560px-Figma_logo.svg.png"
                  alt="Figma"
                  width={80}
                  height={30}
                />
              </div>
              <video
                src="/assets/illustration.mp4"
                controls
                muted
                autoPlay
                loop
                playsInline
                className="rounded-md w-full max-w-[600px]"
              />
            </section>
          </main>
        </div>
      );
    }
