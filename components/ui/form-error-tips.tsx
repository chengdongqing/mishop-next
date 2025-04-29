import clsx from 'clsx';

export default function FormErrorTips({
  id,
  errors,
  className
}: {
  id: string;
  errors?: string[];
  className?: string;
}) {
  if (!errors?.length) {
    return null;
  }

  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors?.map((error) => (
        <p className={clsx(className, '-mt-2 text-red-500')} key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
