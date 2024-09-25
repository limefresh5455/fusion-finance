import Iframe from "react-iframe";
import bannerImage from "../../../public/Fusion_pics/Fusion-Finance-about-banner.jpg";
import loginImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
export default function Login() {
  return (
    <>
      <main>
        <div className="bg-[#1a584f]">
          <div className="container loginPage flex flex-col lg:flex-row h-auto lg:h-screen py-8">
            <div className="loginImage Container w-full lg:w-1/2 flex justify-center items-center">
              <img
                src={loginImage.src}
                alt="Login"
                className="max-w-full rounded-lg"
              />
            </div>
            <div className="loginForm w-full lg:w-1/2 flex flex-col justify-center pt-6 lg:pt-0">
              <div className="lg:container w-full">
                <div className="flex justify-center bg-[#fff] pb-4 pt-4 lg:pt-8">
                  <h1>Login</h1>
                </div>
                <div className="w-full h-fit flex justify-center bg-[#fff] pb-4 lg:pb-8">
                  <iframe
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    src="https://www.bis-platform.com/ob/p_web_portal_new.php?style_id=5875"
                    title="BIS Platform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
