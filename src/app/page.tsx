import GithubSignin from "@/components/github-signin";
import GoogleSignin from "@/components/google-signin";
import ThemeSwitcher from "@/components/theme-switcher";
import VerticalTab from "@/components/vertical-tab";
import { Italianno, Spectral, Montserrat } from "next/font/google";

const italianno = Italianno({ subsets: ["latin"], weight: "400" });
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["500"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="w-full p-8 md:py-12 lg:p-24 flex flex-col justify-center relative flex-grow">
      <div className="flex flex-col justify-center">
        <div className="absolute top-8 right-8">
          <ThemeSwitcher variant="ghost" size={30} type="thin" />
        </div>
        <h1 className={`${italianno.className} text-6xl lg:text-9xl`}>
          Carnet.
        </h1>
        <h2
          className={`${spectral.className} text-2xl lg:text-3xl font-medium max-w-[40rem]`}
        >
          Your new favorite way to take notes, stay organized, and boost your
          creativity.
        </h2>
        <VerticalTab />
        <div className="flex gap-4 items-center my-10 mx-2">
          <GoogleSignin />
          <span className={`${montserrat.className} tertiary-text`}>OR</span>
          <GithubSignin />
        </div>
      </div>
    </div>
  );
}
