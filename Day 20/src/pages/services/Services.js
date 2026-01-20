import ServiceCard from "../../components/services/ServiceCard";
import { services } from "../../data/services";
import { getUser } from "../../hooks/useAuth";

export default function Services() {
  const user = getUser();
  const isAdmin = user?.role === "admin";

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Hospital Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(services) &&
          services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isAdmin={isAdmin}
            />
        ))}
      </div>
    </div>
  );
}
