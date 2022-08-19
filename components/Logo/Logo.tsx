import Image from 'next/image';
import LogoIcon from './logo.svg';
import Link from "next/link";

export const Logo = () => {
  return(
    <Link href='/'><a><Image src={LogoIcon}/></a></Link>
  )
}