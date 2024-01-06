import Contact from "@/components/contact/Contact";
import Description from "@/components/description/Description";
import Header from "@/components/header/Header";
import Links from "@/components/links/Links";
import Navbar from "@/components/navbar/Navbar";
import Posts from "@/components/posts/Posts";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {



  return (


    <ScrollArea className="h-full w-full ">

    <div  className="container h-[100vh] flex flex-col gap-[1.5rem]  max-w-2xl ">

<Navbar/>
<Header/> 
<Description/>
<Links/>
<SocialLinks/>
<Contact/>

<Posts/>



    </div>

    </ScrollArea>

  )
}
