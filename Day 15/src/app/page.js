import ThemeToggle from "./components/ThemeToggle";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center text-text">
      <div className="p-10 rounded-xl shadow-lg space-y-4">
        <ThemeToggle />
        <h1 className="text-3xl font-bold">Dark / Light Theme</h1>
        <p>This page uses CSS variables.</p>

        <Card>
          This card is built with Styled Components  
          and reacts to Dark / Light theme.
        </Card>
      </div>
    </div>
  );
}
