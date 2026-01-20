import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import OfflineBanner from "../comman/OfflineBanner";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      <OfflineBanner/>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
