import React from "react"

export default function Navbar() {
    return (
        <div className="h-11 bg-main flex items-center justify-center gap-2">
            <img src="/globe.png" alt="globe-icon" className="w-6" />
            <p className="text-sm text-white font-medium">my travel journal.</p>
        </div>
    )
}