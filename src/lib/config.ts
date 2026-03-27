function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function deriveApiBaseUrl() {
  if (typeof window === "undefined") return "http://127.0.0.1:3007";

  const { protocol, hostname } = window.location;
  const isHttps = protocol === "https:";
  const httpProto = isHttps ? "https:" : "http:";

  const host = hostname.startsWith("www.") ? hostname.slice(4) : hostname;

  if (host === "127.0.0.1" || host === "localhost") {
    return "http://127.0.0.1:3007";
  }

  if (host.startsWith("api.")) {
    return `${httpProto}//${host}`;
  }

  return `${httpProto}//api.${host}`;
}

const envApiUrl = import.meta.env.VITE_API_URL as string | undefined;
const normalizedEnvApiUrl = (() => {
  if (!envApiUrl) return undefined;
  const trimmed = envApiUrl.trim();
  if (!trimmed) return undefined;
  if (trimmed.toLowerCase() === "undefined") return undefined;
  if (trimmed.toLowerCase() === "null") return undefined;
  return trimmed;
})();

export const serverApi: string = stripTrailingSlash(normalizedEnvApiUrl || deriveApiBaseUrl());

export const Messages = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fulfill all inputs!",
  error4: "Message is empty!",
  error5: "Only images with jpeg, jpg, png format allowed!",
};
