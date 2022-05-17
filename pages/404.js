import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");   
    //   redirect 404 page to homepage
    }, 3000),
      [];
  });
  return (
    <div className="not-found">
      <h1>ooooops</h1>
      <h2>That page is not found!</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
