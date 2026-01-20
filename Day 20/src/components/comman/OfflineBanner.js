import { useNetworkState } from "react-use";
import { WifiOff } from "lucide-react";

export default function OfflineBanner() {
  const { online } = useNetworkState();

  if (online) return null;

  return (
    <div className="bg-red-500 text-white text-sm py-2 px-4 flex items-center justify-center gap-2">
      <WifiOff size={16} />
      You are offline. Showing cached data.
    </div>
  );
}
