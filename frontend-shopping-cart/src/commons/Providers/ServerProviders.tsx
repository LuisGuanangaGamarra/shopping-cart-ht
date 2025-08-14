import { ReactNode } from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import ClientProviders from "./ClientProviders";
import { getProducts, getCart } from "@/services/api";

export default async function ServerProviders({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    await queryClient.prefetchQuery({
        queryKey: ["cart"],
        queryFn: getCart,
    });

    const dehydratedState = dehydrate(queryClient);

    return <ClientProviders dehydratedState={dehydratedState}>{children}</ClientProviders>;
}
