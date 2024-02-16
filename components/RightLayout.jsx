import Image from "next/image";
import loginPattern from "/public/login-pattern.png";

export default function RightLayout() {
  return (
    <div className="w-1/2 bg-black text-white relative flex flex-col justify-end items-center tab:hidden">
      <div className="max-w-[85%] overflow-hidden">
        <div className="mt-5">
          <div className="text-2xl font-bold">
            Millions of Product Ready to Dropship
          </div>
          <div className="text-xl font-light">
            Millions of Product Ready to Dropship. Millions of Product Ready to
            Dropship. Millions of Product Ready to Dropship.
          </div>
        </div>
        <div className="flex gap-1 mt-3">
          {[...Array(3)].map((_, index) => (
            <div className="rounded-full bg-[#333333] p-1 w-1 cursor-pointer hover:bg-white"></div>
          ))}
        </div>
        <div className="mt-5 bottom-0 h-[500px]">
          <Image src={loginPattern} alt={"login Pattern"} width={558} />
        </div>
      </div>
    </div>
  );
}
