import Link from "next/link";
export const Header = () => {
  return (
      <header>
        <Link href='/'><a><img src="./logo.svg" alt=""/></a></Link>
      </header>
  );
}