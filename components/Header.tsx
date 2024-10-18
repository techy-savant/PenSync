import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex items-center ">
        <Image
          src="/assets/icons/pensync.svg"
          alt="Logo with name"
          width={35}
          height={25}
          className=""
        />
        <h2 className="text-white font-bold text-xl mr-2 ">PenSync</h2>
      </Link>
      {children}
    </div>
  );
};

export default Header;
