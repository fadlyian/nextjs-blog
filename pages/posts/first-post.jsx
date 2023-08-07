import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layouts from "../../components/layouts";

export default function FirstPost() {
  const YourComponent = () => (
    <Image
      src={"/images/profile.jpg"} // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );

  return (
    <>
      <Layouts>
        {/* <Head>
          <h1>First Post</h1>
        </Head> */}
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
        <br />
        <p>image tanpa component library next</p>
        <img src={"/images/profile.jpg"} alt="Your Name" />

        <br />
        <p>image menggunakan componen library next/image</p>
        <Image
          src={"/images/profile.jpg"}
          width={144}
          height={144}
          alt="ianganteng"
        />
      </Layouts>
    </>
  );
}
