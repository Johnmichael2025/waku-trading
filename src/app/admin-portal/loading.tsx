import { Spinner } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner color="warning" label="Loading..." />
    </div>
  );
};

export default LoadingPage;
