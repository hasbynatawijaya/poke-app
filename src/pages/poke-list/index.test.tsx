import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import usePokeList from "@/hooks/usePokeList";

const queryClient = new QueryClient();

const Components = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Poke list", () => {
  it("Get success status from server", async () => {
    const { result } = renderHook(() => usePokeList(), { wrapper: Components });
    await waitFor(() => expect(result.current.status).toBe("success"));
  });
});
