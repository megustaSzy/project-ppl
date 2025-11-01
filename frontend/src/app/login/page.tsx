
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail } from "lucide-react";

export default function LoginUser() {
  return (
    // buat tampilan menun login
    <div className="min-h-screen bg-gray-300/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 w-full max-w-md">
        <div className="text-center space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tight">Selamat Datang</h2>
          <p className="text-muted-foreground">
            Masuk ke akun Anda untuk melanjutkan
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2"></div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Masukkan email Anda"
            // value={email}
            required
          ></Input>
          <div className="space-y-2"></div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            placeholder="Masukkan password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20}/>} */}
          </button>
        </form>
      </div>
    </div>
  );
}
