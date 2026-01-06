
function App() {
    return (
        <Layout>
            <h2>Reusable Components</h2>
            <Card
                title={"Welcome.."}
                content={"This is a reusable card Component"}
                footer={<Button label={"Click Me"} onClick={() => alert("Button Clicked")} />}
            />
            <Button label="Primary Action" variant="primary" onClick={() => alert("Primary clicked")} />
            <Button label="Secondary Action" variant="secondary" onClick={() => alert("Secondary clicked")} />
        </Layout>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);