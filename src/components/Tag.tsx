import classNames from "classnames";

interface TagProps {
  key: string;
  className?: string;
  children: React.ReactNode;
}

function Tag(props: TagProps) {
  const { key, className, children } = props;
  return (
    <span
      key={key}
      className={classNames(
        className,
        "bg-slate-200 text-gray-600 text-sm font-semibold py-2 px-3 rounded-2xl"
      )}
    >
      {"# " + children}
    </span>
  );
}

export default Tag;
