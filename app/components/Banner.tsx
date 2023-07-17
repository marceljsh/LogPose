import Image from "next/image";
import World from "@public/world.svg";
import Link from "next/link";

interface IProps {
  href: any;
  content: any;
}

const Redir = ({ href, content }: IProps) => {
  return (
    <Link className="text-slate-500 hover:text-amber-400" href={href}>
      {content}
    </Link>
  );
};

const Banner = () => {
  const logPose = "https://onepiece.fandom.com/wiki/Log_Pose";
  const onePiece = "https://en.wikipedia.org/wiki/One_Piece";
  return (
    <div className="flex justify-between items-center mb-12 gap-28">
      <span className="text-slate-400 text-xl w-1/2">
        In <Redir content={"One Piece"} href={onePiece} />, a{" "}
        <Redir content={"Log Pose"} href={logPose} /> is a specialized type of
        compass, a necessity for navigating the Grand Line (where the unique
        minerals in every island produce atypical magnetic fields that render
        ordinary compasses useless).
      </span>

      <Image
        src={World}
        width={400}
        height={400}
        alt="World Map"
        className="opacity-60 transition-transform hover:scale-110"
      />
    </div>
  );
};

export default Banner;
