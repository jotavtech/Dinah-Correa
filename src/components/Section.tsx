import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  containerClassName,
  as: Tag = "section",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      id={id}
      className={cn("scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className={cn("mx-auto w-full max-w-[1200px]", containerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
