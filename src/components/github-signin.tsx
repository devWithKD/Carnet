import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "@/auth";

function GithubSignin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button
        variant="secondary"
        className="rounded-none flex justify-center items-center gap-4 text-lg p-6 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-200/60 hover:dark:bg-zinc-800/60"
      >
        <FaGithub size={20} />
        SignIn with Github
      </Button>
    </form>
  );
}

export default GithubSignin;
