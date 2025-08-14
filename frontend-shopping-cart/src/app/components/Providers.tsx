"use client";

import { ReactNode, useState } from "react";
import { CartProvider } from "../../Cart/context/CartContext";
import {
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
    type DehydratedState,
} from "@tanstack/react-query";

export default function Providers({
                                      children,
                                      dehydratedState,
                                  }: {
    children: ReactNode;
    dehydratedState?: DehydratedState;
}) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnMount: false,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                <CartProvider>{children}</CartProvider>
            </HydrationBoundary>
        </QueryClientProvider>
    );
}
