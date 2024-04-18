'use client';

import useSWR from "swr";
import { fetchAPI } from "@/app/lib/fetchAPI";
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { EventHandler, FormEventHandler, FormHTMLAttributes, InputHTMLAttributes, MouseEventHandler } from "react";

interface deliveryType {
    id: number,
    status: "Pendente" | "Despachado" | "Finalizado",
    status_code: 1 | 2 | 3,
    street: String,
    number: String,
    complement: String,
    neighborhood: String,
    city: String,
    state: String,
    country: String,
    phone: String
}

export default function CardDelivery() {
    const { data: deliveryData } = useSWR('/delivery', async url => await fetchAPI<deliveryType[]>(url), { refreshInterval: 10000 });

    const statusButton = [{ id: 2, description: "Despachar" }, { id: 3, description: "Finalizar" }];
    const statusDelivery = [{ id: 1, description: 'Pendente' }, { id: 2, description: "Despachado" }, { id: 3, description: 'Finalizado' }];

    const handleClickDelivery = async ({ currentTarget: { value, tabIndex } }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const findStatusDelivery = statusDelivery.find(status => status.id == tabIndex);

        await fetchAPI(`/delivery/${value}`, { method: "PATCH", body: JSON.stringify({status_code: findStatusDelivery?.id, status: findStatusDelivery?.description})})
    }

    return (
        <div className="pl-10">
            {!deliveryData ?
                (<div className="flex gap-5">
                    {Array(5).fill(
                        <Skeleton className="h-[300px] w-[300px]" />
                    )}
                </div>)
                : (
                    <>
                        {deliveryData.length > 0 && deliveryData.map(delivery => (
                            <Card className="max-w-fit">
                                <CardHeader>
                                    <CardTitle>{delivery.street}, nº {delivery.number} <Badge className="ml-2">{delivery.status}</Badge></CardTitle>
                                </CardHeader>
                                <Separator />
                                <CardContent>
                                    <p><b>Id:</b> {delivery.id}</p>
                                    <p><b>Status:</b> {delivery.status}</p>
                                    <p><b>Rua:</b> {delivery.street}</p>
                                    <p><b>Número:</b> {delivery.number}</p>
                                    <p><b>Complemento:</b> {delivery.complement ?? "---"}</p>
                                    <p><b>Bairro:</b> {delivery.neighborhood}</p>
                                    <p><b>Cidade:</b> {delivery.city}</p>
                                    <p><b>Estado:</b> {delivery.status}</p>
                                    <p><b>País:</b> {delivery.country}</p>
                                    <p><b>Celular:</b> {delivery.phone}</p>
                                </CardContent>
                                <Separator />
                                <CardFooter className="flex justify-end mt-3">
                                    <Button onClick={handleClickDelivery} value={delivery.id} tabIndex={delivery.status_code + 1}>{statusButton.find(status => status.id == delivery.status_code + 1)?.description}</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </>
                )}

        </div>
    )
}