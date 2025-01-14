"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/createSupabaseClient";
import { useRouter } from "next/navigation";
import { IUser } from "@/types/user";
import Cookies from 'js-cookie'

const formSchema = z.object({
    username: z.string(),
    password: z.string()
})


export default function LoginForm(){
    //TODO: Que el routing se haga en otro archivo para que esto sea server-side
    const router=useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        password: '',
      },
    })
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.username,
          password: values.password,
        })
    
        if (!error && data) {
          const user: IUser = {
            id: data?.user.id,
            token: data?.session.access_token
          }
          Cookies.set('user', JSON.stringify(user))
          console.log(Cookies.get('user'))
          router.push('/dashboard')
        } else {
          console.error(error)
        }
      }
    return (
        <section className="flex flex-col justify-center items-center p-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} 
                className="w-full border-2 border-gray-800 rounded-lg max-w-96 p-4">
                    <h1 className="pb-4">Inicia sesion en Matetec</h1>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de usuario</FormLabel>
                          <FormControl>
                            <Input placeholder="pgiaimo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contraseña</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="*****" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="mt-4">Submit</Button>
              </form>
            </Form>
        </section>
      )
    }