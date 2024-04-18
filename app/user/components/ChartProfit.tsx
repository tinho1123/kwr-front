'use client';

import { fetchAPI } from "@/app/lib/fetchAPI";
import { BarChart } from '@mui/x-charts';
import moment from 'moment';
import useSWR from 'swr';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChartProfit() {
    const { data: dashboard } = useSWR(`/dashboard`, async url => await fetchAPI<{chart: []}>(url), { refreshInterval: 10000 });

    return (
        <Card className="max-w-fit">
            <CardHeader className="text-center">
                <CardTitle className="text-lg">Lucro Anual</CardTitle>
                <CardDescription>Mês de {moment().year()}</CardDescription>
            </CardHeader>
            <CardContent>
                {dashboard?.chart && dashboard?.chart.length > 0 && (
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] }]}
                        series={[{data: dashboard.chart}]}
                        width={1000}
                        height={500}
                    />
                )}
            </CardContent>
        </Card>
    )
}