import React from "react";
import { Section } from "@/lib/widgets/Section";
import { Txt } from "@/lib/widgets/Txt";
import { Spacing } from "@/lib/widgets/Spacing";
import { Tab } from "@/lib/widgets/Tab";
import { NextRouter, useRouter } from "next/router";
import { colors } from "@/lib/theme/colors";

//
export default function Error() {
  const router: NextRouter = useRouter();

  return (
    <Section css={{ justifyContent: "center" }}>
      <Txt as="h4">페이지를 찾을 수 없습니다</Txt>
      <Spacing size={14} />
      <Txt as="p" css={{ color: "#797979" }}>
        아래 버튼을 통해 이전페이지로 이동하세요
      </Txt>

      <Spacing size={20} />
      <Tab
        css={{
          background: colors.keyColor,
          color: colors.white,
          padding: "14px 30px",
        }}
        onClick={() => router.back()}
      >
        뒤로가기
      </Tab>
    </Section>
  );
}
