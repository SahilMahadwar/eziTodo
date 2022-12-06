import PageLayout from "@ui/PageLayout";
import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <PageLayout>
      <div>Is this inter</div>
      <p>{JSON.stringify(session?.user)}</p>
      <button
        className="rounded-md bg-red-500 px-4 py-2 text-white"
        onClick={() => signIn()}
      >
        Login
      </button>
    </PageLayout>
  );
};

export default Home;
