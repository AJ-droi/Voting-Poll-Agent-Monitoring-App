"use client";
import authService from "@/app/api/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VerifyPage = () => {
    const router = useRouter();

    useEffect(() => {
        const verify = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const secret = urlParams.get('secret');
            const userId = urlParams.get('userId');

            // Ensure both userId and secret are available before verifying
            if (userId && secret) {
                try {
                    const isVerified = await authService.verifyEmail({ userId, secret });
                    if (isVerified) {
                        router.push('/profile');
                    } else {
                        console.error("Verification failed.");
                    }
                } catch (error) {
                    console.error("Error during verification:", error);
                }
            } else {
                console.error("Missing userId or secret.");
            }
        };

        verify();
    }, [router]);

    return null; // Render nothing as verification is handled in the background
};

export default VerifyPage;
