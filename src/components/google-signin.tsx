import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";

function GoogleSignin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        variant="secondary"
        className="rounded-none flex justify-center items-center gap-4 text-lg p-6 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-200/60 hover:dark:bg-zinc-800/60"
      >
        <FcGoogle size={20} />
        SignIn with Google
      </Button>
    </form>
  );
}

export default GoogleSignin;