'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ShadcnPlayground() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Shadcn Playground</CardTitle>
          <CardDescription>
            Exploring various shadcn components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="input" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="button">Button</TabsTrigger>
            </TabsList>
            <TabsContent value="input">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="button">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 