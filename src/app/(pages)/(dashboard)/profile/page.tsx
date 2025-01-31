"use client"
import authService from "@/app/api/services/auth.service";
import Account from "@/components/profile/Account";
import useData from "@/hooks/useData";
import { useEffect, useState } from "react"

export default function ProfilePage() {
    const { data, error } = useData(authService.getUser);
    console.log(data)

    return (
      <Account />
    )
  }