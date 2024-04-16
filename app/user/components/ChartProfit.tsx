'use client';

import { fetchAPI } from "@/app/lib/fetchAPI";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    registerables,

} from 'chart.js';
import moment from 'moment';
import useSWR from 'swr';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(...registerables)

export default function ChartProfit() {
    const { data: chartData } = useSWR(`chart`, async url => await fetchAPI('/chart'), { refreshInterval: 10000 });

    return (
        <Card className="w-1/3">
            <CardHeader className="text-center">
                <CardTitle className="text-lg">Lucro Anual</CardTitle>
                <CardDescription>Mês de {moment().year()}</CardDescription>
            </CardHeader>
            <CardContent>
                <Bar options={{
                    responsive: true
                }} data={{
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    datasets: [
                        {
                            label: 'Lucro',
                            data: chartData,
                            backgroundColor: 'blue'
                        }
                    ]
                }} />
            </CardContent>
        </Card>
    )
}