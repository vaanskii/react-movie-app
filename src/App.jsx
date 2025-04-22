const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" isCool={true} />
      <Card title="Avatar" />
      <Card title="Thge Lion King" />
    </div> //
  );
};

export default App;
