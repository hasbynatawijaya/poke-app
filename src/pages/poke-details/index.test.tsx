import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import usePokeDetails from "@/hooks/usePokeDetails";

const queryClient = new QueryClient();

const Components = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Poke details", () => {
  it("Get success status from server", async () => {
    const { result } = renderHook(() => usePokeDetails("1"), {
      wrapper: Components,
    });
    await waitFor(() => expect(result.current.status).toBe("success"));
  });
});
