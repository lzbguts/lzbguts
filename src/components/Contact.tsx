"use client"

import { ContactSchema } from "@/validation/contact";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";
import { sendMail } from "@/lib/actions";

export const Contact = () => {
  const t = useTranslations()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
    setIsLoading(true)
    const response = await sendMail(values)

    if (response) {
      form.reset()
      toast({
        title: t("Success!"),
        description: t("Your message was sent successfully!"),
      })
    }

    setIsLoading(false)
  }

  return (
    <div id="contact" className={`flex flex-col space-y-4 items-center`}>
      <p className="text-4xl">{t("Contact")}</p>
      <div className="w-full lg:w-6/12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Name")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Message")}</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="outline"
              className="hover:bg-nav"
            >
              {
                isLoading
                  ? <LoaderIcon className="animate-spin" />
                  : t("Send")
              }
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}