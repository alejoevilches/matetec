//TODO: Cuando consuma posta los datos, deberia haber un componente para el ul y para los li

import CardsLayout from "./CardsLayout";
import CardsTitle from "./CardsTitle";

export default function TurnsCard(){
    return (
        <CardsLayout>
            <CardsTitle title='Resumen de turnos' subtitle="Aca podes ver tus proximos turnos" />
            <ul className="flex flex-col gap-4">
                <li className="flex flex-row">
                    <div className="flex flex-col justify-around w-full">
                        <strong>Juan Perez</strong>
                        <p className="text-gray-500">Cardiologia</p>
                    </div>
                    <div className="flex flex-col">
                        <p>09/12/2024</p>
                        <p className="text-gray-500">10:00 am</p>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="flex flex-col justify-around w-full">
                        <strong>Juan Fernando Quintero</strong>
                        <p className="text-gray-500">Cardiologia</p>
                    </div>
                    <div className="flex flex-col">
                        <p>09/12/2024</p>
                        <p className="text-gray-500">09:12 am</p>
                    </div>
                </li>
            </ul>
        </CardsLayout>
    )
}