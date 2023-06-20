import { useAppSelector } from "@/store";
import { useRouter } from "next/router";

export default function AuthRoute({ children }:{
    children:React.ReactNode
}) {
  const { isAuthenticated } = useAppSelector((state) => state?.auth);
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/");
  }
  return children;
}