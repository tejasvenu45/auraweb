import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const allowedEmails = process.env.ALLOWED_EMAILS?.split(",") || [];

const isAdmin = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isAuthenticated, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/Login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    const hasAccess = allowedEmails.length === 0 || allowedEmails.includes(user?.email);

    if (!hasAccess) {
      return <p>You do not have permission to access this content.</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default isAdmin;
