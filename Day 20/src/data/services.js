import {
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Pill,
  Ambulance,
} from "lucide-react";

export const services = [
  {
    id: 1,
    name: "OPD Consultation",
    description: "General outpatient consultation services",
    icon: Stethoscope,
  },
  {
    id: 2,
    name: "Laboratory Tests",
    description: "Blood tests and diagnostics",
    icon: FlaskConical,
  },
  {
    id: 3,
    name: "ICU Care",
    description: "24/7 intensive care facilities",
    icon: HeartPulse,
  },
  {
    id: 4,
    name: "Pharmacy",
    description: "In-house pharmacy services",
    icon: Pill,
  },
  {
    id: 5,
    name: "Ambulance",
    description: "Emergency ambulance services",
    icon: Ambulance,
  },
];
