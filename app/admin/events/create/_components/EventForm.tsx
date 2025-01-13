"use client"


import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import EventThumbnailModel from './EventThumbnailModel'
import { Id } from '@/convex/_generated/dataModel'
import Image from 'next/image'
import { format } from 'date-fns'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'next/navigation'

type EventFormProps = {
    type: "Create" | "Update"
}



const formSchema = z.object({
    eventTitle: z.string().min(10
        , {
            message: "Event Title must be at least 10 characters.",
        }),
    eventCategory: z.string(),

    eventDescription: z.string().min(10, {
        message: "Event Title must be at least 10 characters.",
    }),

    eventLocation: z.string(),

    startDateTime: z.date(),

    endDateTime: z.date(),

    price: z.string(),

    isFree: z.boolean(),

    eventType: z.boolean(),
})

const EventForm = ({ type }: EventFormProps) => {

    const [imageUrl, setImageUrl] = useState('');
    const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const createEvent = useMutation(api.events.createEvent);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventTitle: "",
            eventCategory: "",
            eventDescription: "",
            eventLocation: "",
            price: "",
            isFree: false,
            eventType: false,
        },
    })


    function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            setIsSubmitting(true);
            if (!imageUrl) {
                toast({ title: 'Please upload Thumbnail file', variant: 'destructive' })
                setIsSubmitting(false)
                throw new Error("Please upload Thumbnail file")
            }
            const event = createEvent({
                eventTitle: data.eventTitle,
                eventCategory: data.eventCategory,
                eventDescription: data.eventDescription,
                location: data.eventLocation,
                imageUrl,
                imageStorageId: imageStorageId!,
                startDateTime: data.startDateTime.toString(),
                endDateTime: data.endDateTime.toString(),
                price: data.price,
                isFree: data.isFree,
                eventType: data.eventType
            })
            toast({ title: "Congratulations!! Event created" })
            setIsSubmitting(false)
            router.push(`/admin/events`)
        } catch (error) {
            console.log(error)
            toast({ title: 'Error', variant: 'destructive' })
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="eventTitle"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input placeholder="Event Title" {...field} className='input-field' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="eventCategory"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="select-field">
                                            <SelectValue placeholder="Event Category" className='placeholder:text-grey-500' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className='bg-white-1'>
                                        <SelectItem value="Technical" className='cursor-pointer'>Technical</SelectItem>
                                        <SelectItem value="NonTechnical" className='cursor-pointer'>Non Technical</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="eventDescription"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl className="h-72">
                                    <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <EventThumbnailModel
                        setImage={setImageUrl}
                        setImageStorageId={setImageStorageId}
                        image={imageUrl}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">

                    <FormField
                        control={form.control}
                        name="eventLocation"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-200 px-4 py-2">
                                        <Image
                                            src="/assets/icons/location-grey.svg"
                                            alt="calendar"
                                            width={24}
                                            height={24}
                                        />

                                        <Input placeholder="Event location or Online" {...field} className="input-field" />
                                    </div>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>
                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="startDateTime"
                        render={({ field }) => (
                            <FormItem className="w-full">

                                <div className="relative flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-200 px-4 py-2">
                                    <Popover>
                                        <FormLabel className='absolute left-4'>Starting Date:</FormLabel>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                                className='bg-white-1'
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="endDateTime"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <div className="relative flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-200 px-4 py-2">
                                    <Popover>
                                        <FormLabel className='absolute left-4'>Ending Date:</FormLabel>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                className='bg-white-1'
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-200 px-4 py-2">
                                        <Image
                                            src="/assets/icons/rupee.svg"
                                            alt="rupee"
                                            width={24}
                                            height={24}
                                            className="filter-grey"
                                        />
                                        <Input type="number" placeholder="Price" {...field} className="p-regular-16 border-0 bg-gray-200 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                        <FormField
                                            control={form.control}
                                            name="isFree"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <div className="flex items-center">
                                                            <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Ticket</label>
                                                            <Checkbox
                                                                onCheckedChange={field.onChange}
                                                                checked={field.value}
                                                                id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                                                        </div>

                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-200 px-4 py-2">
                                        <label htmlFor="eventType" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Upcoming event</label>
                                        <Checkbox
                                            onCheckedChange={field.onChange}
                                            checked={field.value}
                                            id="eventType" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                                    </div>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="button col-span-2 w-full"
                >
                    {form.formState.isSubmitting ? (
                        'Submitting...'
                    ) : `${type} Event `}
                </Button>
            </form>
        </Form>
    )
}

export default EventForm