import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

type buttonProps = {
  text: string;
  handlerOnClick: () => void;
  color: string;
};

export default function Button(props: buttonProps): JSX.Element {
  return (
    <div>
      <button
        onClick={props.handlerOnClick}
        className={`px-6 py-2 font-medium tracking-wide ${props.color} hover:text-white capitalize transition-colors duration-300 transfor rounded-lg`}
      >
        {props.text}
      </button>
    </div>
  );
}
