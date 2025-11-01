import { Button } from "@/components/ui/button";
import React from "react";

export default function HomePageUser() {
  return (
    <div className="min-h-screen bg-gray-300/70">
      <header className="bg-white py-10 shadow-xl">
        <div className="flex items-center justify-between mx-30 ">
          <div className="text-3xl font-bold tracking-tight">
            Rental PS Arhas
          </div>
          <div className="flex space-x-10 mr-5">
            <Button
              variant="outline"
              className="h-10 shadow-md border-3 bg-black text-white rounded-lg"
            >
              Lapor
            </Button>
            <Button
              variant="outline"
              className="h-10 shadow-md border-3 bg-black text-white rounded-lg"
            >
              Ditemukan
            </Button>
          </div>
        </div>
      </header>
      <article>
        <div className="flex justify-center py-5 mt-5">
          <p className="font-bold text-2xl">
            Website Penemuan dan Pelaporan Barang Hilang
          </p>
        </div>
      </article>
    </div>
  );
}
