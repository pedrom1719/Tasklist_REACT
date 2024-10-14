import { ElementType } from "react";

export interface IconTagProps {
  icon: ElementType;
  color?: string;
}

function IconTag({ icon: Icon, color }: IconTagProps) {
  return (
    <>
      <Icon className={`${color}`} />
    </>
  );
}

export default IconTag;
