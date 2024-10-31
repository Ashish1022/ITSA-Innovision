import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useToast } from '@/hooks/use-toast';
import { title } from 'process';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useMutation } from "convex/react"
import { useUploadFiles } from '@xixixao/uploadstuff/react';
import { Button } from '@/components/ui/button';

interface EventThumbnailModelProps {
    setImage: Dispatch<SetStateAction<string>>;
    setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
    image: string;
}

const EventThumbnailModel = ({ setImage, setImageStorageId, image }: EventThumbnailModelProps) => {

    const imageRef = useRef<HTMLInputElement>(null);
    const [imageLoading, setImageLoading] = useState(false);

    const uploadUrl = useMutation(api.files.generateUploadUrl);
    const { startUpload } = useUploadFiles(uploadUrl);
    const getImageUrl = useMutation(api.events.getUrl);

    const { toast } = useToast();

    const handleImage = async (blob: Blob, fileName: string) => {
        setImageLoading(true);
        setImage('');
        try {
            const file = new File([blob], fileName, { type: 'Image/png' });
            const uploaded = await startUpload([file]);
            const storageId = (uploaded[0].response as any).storageId;
            setImageStorageId(storageId);
            const imageUrl = await getImageUrl({ storageId });
            setImage(imageUrl!);
            setImageLoading(false);
            toast({ title: 'Thumbnail uploaded successfully' })
        } catch (error) {
            console.log(error);
            toast({ title: "Error", variant: "destructive" })
        }
    }

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {
            const files = e.target.files;
            if (!files) return;
            const file = files[0];
            const blob = await file.arrayBuffer().then((ab) => new Blob([ab]));
            handleImage(blob, file.name);
        } catch (error) {
            console.log(error)
            toast({ title: 'Error Uplaoding image', variant: 'destructive' })
        }
    }

    return (
        <>
            <div onClick={() => imageRef.current?.click()} className="flex-center flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-gray-200 w-full">
                <Input type='file' className='hidden' ref={imageRef} onChange={(e) => uploadImage(e)} />
                {image ? (
                    <div className="flex h-full w-full flex-1 justify-center p-2">
                        <img
                            src={image}
                            alt="image"
                            width={1080}
                            height={720}
                            className="w-full object-cover object-center"
                        />
                    </div>
                ) : (
                    <div className="flex-center flex-col py-5 text-grey-500">
                        <img src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" />
                        <h3 className="mb-2 mt-2">Drag photo here</h3>
                        <p className="p-medium-12 mb-4">SVG, PNG, JPG, JPEG</p>
                        <Button type="button" className="rounded-full">
                            Select from computer
                        </Button>
                    </div>
                )}
            </div>
        </>
    )
}

export default EventThumbnailModel