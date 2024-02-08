"use client";
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Dialog open={isOpen} onOpenChange={(v) => {
            if (!v) setIsOpen(v)
        }}>
            <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                <Button>Upload pdf</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton
