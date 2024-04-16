'use client';

import useSWR from "swr";
import { fetchAPI } from "@/app/lib/fetchAPI";

export default function CardDelivery() {
    const { data } = useSWR('/delivery', async url => await fetchAPI(url), { refreshInterval: 10000 });
    return (
        <>
        {data}
        <div></div>
        </>
    )
}