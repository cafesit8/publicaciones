import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
  AiFillHeart,
} from "react-icons/ai";
import avatar from "../img/avatarDefault.png";

export default function Article({ item }) {
  const [status, setStatus] = useState(false);

  const like = () => setStatus(!status);

  return (
    <article className="bg-[#28243f] w-full p-4 rounded-lg">
      <div className="flex items-center mb-3">
        {!item.avatar ? (
          <img
            className="w-[40px] h-[40px] object-cover rounded-full self-center"
            alt={item.name}
            src={avatar}
          />
        ) : (
          <img
            className="w-[40px] rounded-full self-center"
            alt={item.name}
            src={item.avatar}
          />
        )}
        <div className="ml-2">
          <h5 className="font-semibold text-[14px]">{item.name}</h5>
          <p className="font-normal text-[12px]">
            Hace {Math.ceil(Math.random() * 31)} días
          </p>
        </div>
      </div>
      <picture className="w-full">
        <img
          className="object-cover w-full h-full rounded-xl"
          alt=""
          src={item.img}
        />
      </picture>
      <div>
        <div className="flex my-2 gap-2">
          {status ? (
            <AiFillHeart
              onClick={like}
              className="text-[22px]"
              style={{ color: "red" }}
            />
          ) : (
            <AiOutlineHeart onClick={like} className="text-[22px]" />
          )}
          <AiOutlineMessage className="text-[22px]" />
          <AiOutlineShareAlt className="text-[22px]" />
        </div>
        <div>
          <p className="text-[13px] font-normal">
            <span className="mr-1 font-semibold">{item.name},</span>
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
