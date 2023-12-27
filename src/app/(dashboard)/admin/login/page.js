import { Card } from "antd";
import Image from "next/image";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cover min-h-screen flex justify-center items-center">
      <Card className="w-[400px] mx-auto">
        <div className="flex justify-center items-center flex-col gap-4 mb-6">
          <Image
            src="/next.svg"
            width={30}
            height={30}
            alt=""
            className="w-32 h-10"
          />
          <span className="font-semibold text-2xl">Admin Portal</span>
          <span className="font-[500]">Admin Portal for CMS Website</span>
        </div>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
