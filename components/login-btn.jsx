"use client";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function LoginBtn() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);
  if (session) {
    return (
      <>
        Signed in as
        <Image
          src={session?.user.image ? session?.user.image : ""}
          width={37}
          height={37}
          alt="user image"
          className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1"
        />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed <br />{" "}
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
          >
            Sign In
          </button>
        ))}
    </>
  );
}
