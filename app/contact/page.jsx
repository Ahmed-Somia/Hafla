import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Header } from "@components/index";

const Contact = () => {
  return (
    <section>
      <Header title="Contact Us" />
      <div className="w-full flex lg:flex-row flex-col lg:mt-32 md:mt-20 mt-10 gap-x-6 paddings inner-width">
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
          <h2 className="text-customBlue font-normal md:text-[88px] text-[44px] md:leading-[106px] leading-[53px] font-urbanist mb-8">
            Let's Talk
          </h2>
          <p className="text-customBlue font-normal md:text-[28px] text-[18px] md:leading-[33px] leading-[22px] font-urbanist text-start md:w-[80%] w-full">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help
          </p>
          <h3 className="text-customBlue font-normal text-[44px] leading-[53px] font-urbanist mt-8">
            Email
          </h3>
          <span className="text-customBlue font-normal text-[21px] leading-[26px] font-urbanist mt-4">
            beebs@gmail.com
          </span>
          <h3 className="text-customBlue font-normal text-[44px] leading-[53px] font-urbanist mt-8">
            Socials
          </h3>
          <span className="text-customBlue font-normal text-[21px] leading-[26px] font-urbanist mt-4 underline hover:cursor-pointer">
            Instagram
          </span>
          <span className="text-customBlue font-normal text-[21px] leading-[26px] font-urbanist mt-4 underline hover:cursor-pointer">
            Twitter
          </span>
          <span className="text-customBlue font-normal text-[21px] leading-[26px] font-urbanist mt-4 underline hover:cursor-pointer">
            Facebook
          </span>
        </div>
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-full">
          <Label
            htmlFor="name"
            className="font-normal font-urbanist text-black text-[19px] leading-[29px] lg:mt-0 mt-6"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            className="border border-customBlue rounded-[19px] bg-white mt-4 placeholder:text-[#B2B2B2]"
          />
          <Label
            htmlFor="email"
            className="font-normal font-urbanist text-black text-[19px] leading-[29px] mt-8"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-customBlue rounded-[19px] bg-white mt-4 placeholder:text-[#B2B2B2]"
          />
          <Label
            htmlFor="service"
            className="font-normal font-urbanist text-black text-[19px] leading-[29px] mt-8"
          >
            What service are you interested in?
          </Label>
          <Select>
            <SelectTrigger className="w-full border border-customBlue rounded-[19px] bg-white mt-4 placeholder:text-[#B2B2B2]">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Label
            htmlFor="message"
            className="font-normal font-urbanist text-black text-[19px] leading-[29px] mt-8"
          >
            Message
          </Label>
          <Textarea
            placeholder="Type your message here."
            className="border border-customBlue rounded-[19px] bg-white mt-4 placeholder:text-[#B2B2B2]"
          />
          <Button className="w-full bg-customBlue rounded-[37px] mt-8">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
