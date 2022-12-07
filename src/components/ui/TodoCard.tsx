import Head from "next/head";
import type { ReactNode } from "react";

/* eslint-disable-next-line */
export interface TodoCardProps {
  title: string;
  description?: string;
  tags: string[];
}

const Tag = ({ name }: { name: string }) => {
  return (
    <div className="mt-2 rounded-lg   bg-red-50 py-1.5 px-2 text-xs font-semibold text-red-600">
      {name}
    </div>
  );
};

const TodoCard = ({ title = "eziTodo", description, tags }: TodoCardProps) => {
  return (
    <div className="w-[448px] space-y-3 rounded-lg bg-white px-9 py-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-gray-700">{title}</h2>

      {description && (
        <p className=" text-base font-medium leading-relaxed text-gray-500">
          {description}
        </p>
      )}

      <div className="flex space-x-4">
        {tags.map((tag) => {
          return <Tag name={tag} key={tag} />;
        })}
      </div>
    </div>
  );
};

export default TodoCard;
