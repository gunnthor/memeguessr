type ShareInput = { title: string; text: string; url: string };
type ShareCapabilities = {
  share?: (input: ShareInput) => Promise<void>;
  copy?: (text: string) => Promise<void>;
};

/** Inject browser capabilities so failure and cancellation paths stay testable. */
export async function shareChallenge(input: ShareInput, capabilities: ShareCapabilities) {
  const complete = `${input.text}\n${input.url}`;
  if (capabilities.share) {
    try {
      await capabilities.share(input);
      return { status: "shared" as const, text: complete };
    } catch (error) {
      if (error && typeof error === "object" && "name" in error && error.name === "AbortError") {
        return { status: "canceled" as const, text: complete };
      }
    }
  }
  if (capabilities.copy) {
    try {
      await capabilities.copy(complete);
      return { status: "copied" as const, text: complete };
    } catch {
      // Manual text remains usable when clipboard access is denied.
    }
  }
  return { status: "manual" as const, text: complete };
}
