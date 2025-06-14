import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Banner from "./components/Banner";

export default async function Home() {

  // const session = await getServerSession(authOptions)

  return (
    <div className="text-center text-4xl text-red-600">

     {/* {JSON.stringify(session)} */}
     
     <Banner></Banner>
    </div>
  );
}
