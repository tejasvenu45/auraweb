import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/Login"); 
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; 
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
