import { HeroDefaultReality } from "@/components/home/hero-default-reality";
import { Interruption } from "@/components/home/interruption";
import { Discovery } from "@/components/home/discovery";
import { SystemOpening } from "@/components/home/system-opening";
import { LightReveal } from "@/components/home/light-reveal";
import { DeviceIndex } from "@/components/home/device-index";
import { Evidence } from "@/components/home/evidence";
import { Purchase } from "@/components/home/purchase";

export default function Home() {
  return (
    <>
      <HeroDefaultReality />
      <Interruption />
      <Discovery />
      <SystemOpening />
      <LightReveal />
      <DeviceIndex />
      <Evidence />
      <Purchase />
    </>
  );
}
