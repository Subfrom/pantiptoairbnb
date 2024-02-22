import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center self-stretch px-16 py-5 w-full bg-white leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 self-start text-xl leading-9 whitespace-nowrap" style={{ color: '#2d2a49' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 aspect-square">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <div className="grow my-auto">Pantip</div>
          </div>
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <div className="grow justify-center px-6 py-3.5 text-base font-semibold text-center text-white rounded-xl bg-zinc-900 max-md:px-5">
              Log in
            </div>
          </div>
        </div>
      </div>
        {children}
        <div className="flex flex-col justify-center self-stretch px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mx-10 mt-8 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow">
                <div className="flex gap-3 justify-between text-xl leading-9 whitespace-nowrap" style={{ color: '#2d2a49' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 aspect-square">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <div className="grow my-auto">Pantip</div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-32 mb-8 text-base font-semibold leading-4 text-zinc-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          © 2024. All rights reserved.
        </div>
      </div>
      </body>
    </html>
  );
}
