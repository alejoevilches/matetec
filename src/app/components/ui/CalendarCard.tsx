"use client"

import { Calendar } from "@/components/ui/calendar";
import CardsLayout from "./CardsLayout";
import CardsTitle from "./CardsTitle";
import { useState } from "react";

export default function CalendarCard(){
    const [selectedDate, setSelectedDate]=useState<Date | undefined>(new Date())
    return(
        <CardsLayout>
            <CardsTitle title='Calendario' subtitle="Chequea los turnos en el calentario" />
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
        </CardsLayout>
    )
}