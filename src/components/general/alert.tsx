// components/Alert.tsx

interface AlertProps {
    type: "success" | "error" | "info";
    message: string;
  }
  
  const Alert: React.FC<AlertProps> = ({ type, message }) => {
    const alertStyles = {
      success: "bg-green-100 text-green-700 border-green-500",
      error: "bg-red-100 text-red-700 border-red-500",
      info: "bg-blue-100 text-blue-700 border-blue-500",
    };
  
    return (
      <div
        className={`border-l-4 p-4 mb-4 rounded ${alertStyles[type]}`}
        role="alert"
      >
        <p>{message}</p>
      </div>
    );
  };
  
  export default Alert;
  