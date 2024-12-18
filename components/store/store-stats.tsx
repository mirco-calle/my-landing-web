const stats = [
  { label: "Recursos disponibles", value: "50+" },
  { label: "Clientes satisfechos", value: "200+" },
  { label: "Descargas", value: "1000+" },
];

const StoreStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-900/50 p-6 rounded-xl text-center hover:bg-gray-900/70 transition-all"
        >
          <h3 className="text-4xl font-bold text-secondary mb-2">
            {stat.value}
          </h3>
          <p className="text-gray-300">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export { StoreStats };
