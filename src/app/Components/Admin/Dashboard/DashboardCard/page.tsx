interface DashboardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
  }
  
  const Dashboard: React.FC<DashboardProps> = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="text-3xl text-gray-600">{icon}</div>
        <div>
          <h4 className="text-gray-500">{title}</h4>
          <h2 className="text-2xl font-bold">{value}</h2>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  