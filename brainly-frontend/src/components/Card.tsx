import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
interface CardType {
  title: string;
  type: string;
  link: string;
}

// const topIconsList = [
//   { name: "document", icon: <HiOutlineDocumentText /> },
//   { name: "tweet", icon: <FaXTwitter /> },
//   { name: "youtube", icon: <FiYoutube /> },
//   { name: "link", icon: <FaLink /> },
// ];

export const Card = (props: CardType) => {
  return (
    <div>
      <div className="p-8 bg-white rounded-md shadow-md text-black border border-gray-200 max-w-72 min-w-72 min-h-48">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              {props.type === "tweet" && <FaXTwitter />}
              {props.type === "youtube" && <FiYoutube />}
            </div>
            <div className="text-md">{props.title}</div>
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2 cursor-pointer">
              <a href="{props.link}" target="_blank">
                <IoShareSocialOutline />
              </a>
            </div>
            <div className="text-gray-500 cursor-pointer">
              <MdDeleteOutline />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {props.type === "youtube" && (
            <iframe
              className="w-full"
              src={props.link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {props.type === "tweet" && (
            <blockquote className="twitter-tweet">
              <a href={props.link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
