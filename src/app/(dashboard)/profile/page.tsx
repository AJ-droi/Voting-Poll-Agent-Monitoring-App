"use client"
import logout from "@/app/api/logout";
import authService from "@/app/api/services/auth.service";
import useData from "@/hooks/useData";
import { useEffect, useState } from "react"

export default function ProfilePage() {
    const { data, error } = useData(authService.getUser);
    console.log(data)

    return (
      <div >
        {!data?.emailVerification && <p> Email needs to be verified</p>}
        {/* <div>
            <button
              type="submit"
              className="flex w-50 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => authService.verify()}
            >
             Verify Email
            </button>
          </div> */}
        <div>
            <button
              type="submit"
              className="flex w-50 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => authService.logout()}
            >
             Logout
            </button>
          </div>
      </div>
    )
  }