import { motion } from "framer-motion";
import { getUser } from "../../hooks/useAuth";
import ProfileField from "../../components/profile/ProfileField";

export default function PatientProfile() {
  const user = getUser();

  const profile = {
    name: user?.email.split("@")[0],
    email: user?.email,
    age: 30,
    gender: "Male",
    bloodGroup: "O+",
    condition: "Stable",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl bg-white rounded-xl shadow p-6"
    >
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="space-y-2">
        <ProfileField label="Name" value={profile.name} />
        <ProfileField label="Email" value={profile.email} />
        <ProfileField label="Age" value={profile.age} />
        <ProfileField label="Gender" value={profile.gender} />
        <ProfileField label="Blood Group" value={profile.bloodGroup} />
        <ProfileField label="Condition" value={profile.condition} />
      </div>
    </motion.div>
  );
}
