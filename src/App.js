function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly={true}
        maxLength={3}
        spellCheck={true}
        style={{ backgroundColor: "green" }}
      />
    </div>
  );
}

export default App;
