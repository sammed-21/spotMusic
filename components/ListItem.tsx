"use client";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
    //add the authentication before push
  };
  return (
    <button
      onClick={onClick}
      className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
        "
    >
      <div
        className="
            relative
            min-h-[64px]
            min-w-[64px]
            "
      >
        <Image
          className="object-cover                    "
          fill
          src={image}
          alt="image"
        />
      </div>
      <p className="font-medium truncate py-5   ">{name}</p>
      <div
        className="
      absolute
      transition
      bg-green-500
      right-5
      rounded-full
      p-4
      flex 
      opacity-0
      group-hover:opacity-100
      items-center
      drop-shadow-md
      hover:scale-110
      justify-center
      
      
      
      
      
      
      
      "
      >
        <FaPlay />
      </div>
    </button>
  );
};

export default ListItem;
