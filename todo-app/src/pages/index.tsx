import { Inter } from "next/font/google";
import TodoFormList from "@/components/Todo/TodoFormList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="w-100 flex justify-center">
        <div className="my-5">
          <h1 className="text-xl font-bold text-green-400">ToDo!</h1>
          <TodoFormList></TodoFormList>
        </div>
      </div>
    </div>
  );
}
