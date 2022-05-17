import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
       <Image src="/IMG_20200930_223653(1)2(1).png" alt="logo" width={128} height={77} />
    
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/About"><a>About</a></Link>
      <Link href="/cars"><a>Car List</a></Link> 
      {/* Error: Multiple children were passed to <Link> with `href` of `/` but only one child is supported
     Solution: Remove the space between Link tag and a tag..   And give it like, <Link href="/about"><a> About </a> */}
    </nav>
  );
};

export default Navbar;
