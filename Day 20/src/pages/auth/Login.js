import { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../hooks/useAuth";
import gsap from "gsap";

export default function Login() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  const splashRef = useRef(null);
  const logoRef = useRef(null);
  const loginRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // Splash animation
    tl.fromTo(
      logoRef.current,
      { rotate: 0, scale: 0.8, opacity: 0 },
      {
        rotate: 360,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
      .to(logoRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
      })
      .to(splashRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setShowSplash(false),
      })
      // Login page animation
      .fromTo(
        loginRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, role, password);

    if (success) {
      toast.success("Login successful");
      navigate(`/${role}`, { replace: true });
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <>
      {/* SPLASH SCREEN */}
      {showSplash && (
        <div
          ref={splashRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-600"
        >
          <h1
            ref={logoRef}
            className="text-white text-5xl sm:text-6xl font-bold tracking-wide"
          >
            MediCare
          </h1>
        </div>
      )}

      {/* LOGIN SCREEN */}
      <div
        ref={loginRef}
        className="min-h-screen grid grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT */}
        <div
          className="hidden md:flex relative items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3)",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60" />
          <div className="relative text-white text-center px-10">
            <h1 className="text-4xl font-bold mb-4">MediCare System</h1>
            <p className="text-lg opacity-90">
              Manage patients, doctors and records securely
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Login to MediCare
            </h2>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <select
                className="w-full border rounded-lg p-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
