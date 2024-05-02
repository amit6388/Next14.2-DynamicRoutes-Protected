import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ProtectedRoute = (WrappedComponent: any) => {
  return (props: JSX.IntrinsicAttributes) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuthentication = async () => { 
        const token = localStorage.getItem("token");
        if (!token) { 
          router.push("/login");
        } 
      };

      checkAuthentication();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
