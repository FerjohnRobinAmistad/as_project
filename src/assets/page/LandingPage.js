import React from "react";
import SimpleButton from "../components/SimpleButton";
import Button from "../components/Button";
import icon from "../images/button/arrow.png";

export default function LandingPage() {
  return (
    <>
      <SimpleButton link={""} label={"詳しく見る"} />
      <Button style={"btn2"} link={""} label={"お問い合わせ"} icon={icon} />
    </>
  );
}
