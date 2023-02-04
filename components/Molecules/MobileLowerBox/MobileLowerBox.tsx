import Link from "next/link";
import { MobileLowerBoxWrapper } from "./MobileLowerBox.styled";

const MobileLowerBox = ({ menus }: { menus: { title: string }[] }) => {
  return (
    <MobileLowerBoxWrapper>
      {menus.map(({ title }: { title: string }) => {
        return (
          <div key={title}>
            <Link
              style={{
                width: "1ch",
                overflow: "hidden",
              }}
              href={title.toLowerCase()}
              key={title}
            >
              {title}
            </Link>
          </div>
        );
      })}
    </MobileLowerBoxWrapper>
  );
};

export default MobileLowerBox;
