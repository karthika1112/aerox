import type { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  const Component = icon as unknown as React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

  return <Component aria-hidden className={className} />;
};

export default Icon;
