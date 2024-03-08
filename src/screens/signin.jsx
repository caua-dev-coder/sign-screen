import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {GitHubLogoIcon} from '@radix-ui/react-icons'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import rentalImg from '../assets/rental.svg'
import driverImg from '../assets/driver.svg'
export function SignIn() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
        <Carousel className='w-full max-w-xl'>
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={rentalImg} alt="Alugel de carro"/>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={driverImg} alt="Carro"/>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-fulfl max-w-md">
          <CardHeader className="text-2xl font-bold tracking-tighter"> 
            <CardTitle>
              Entre com sua Conta
            </CardTitle>
            <CardDescription>
              Utilize seu E-mail e senha ou GitHub para entrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="example@email.com" type="email"/>
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="Sua Senha" type="password"/>
            </div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="flex text-center gap-6 mt-4">
              <Separator>
                <span className="text-xs text-muted-foreground">OU</span>
              </Separator>
            </div>
            <Button variant="outline" className="mt-6 w-full"><GitHubLogoIcon className="mr-2"/>Entrar com o GitHub</Button>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma voce concorda com os nossos Termos de Uso e Politica de Privacidade</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}