import PageLayout from "@ui/PageLayout";
import TodoCard from "@ui/TodoCard";
import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
//
const TodoList: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <PageLayout title="Todo Lists">
      <div className="">
        <div className="fixed top-0 z-20 flex h-20  w-full items-center justify-center bg-gradient-to-b from-gray-50"></div>

        <div className="fixed top-10 z-30 flex w-full items-center justify-center">
          <h1 className="text-7xl font-black text-slate-200">Daily Todo</h1>
        </div>

        <div className="mt-40 mb-44 flex flex-col items-center justify-center">
          <div className=" space-y-8">
            {[1, 2, 4, 5, 6, 7, 8].map((todo) => {
              return (
                <TodoCard
                  key={todo}
                  tags={["Priority"]}
                  title="Lorem ipsum dolor"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                />
              );
            })}
          </div>
        </div>
        <div
          className="fixed bottom-0 z-20 flex h-44 w-full justify-center  bg-gradient-to-t
        from-gray-50 via-gray-50 "
        >
          <button className="mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-14 w-14 text-slate-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default TodoList;
