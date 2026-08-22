import type { JsonLdValue } from "@/content/routes";

type JsonLdProps = {
  id: string;
  items: JsonLdValue[];
};

export function JsonLd({ id, items }: JsonLdProps) {
  return (
    <>
      {items.map((item, index) => (
        <script key={`${id}-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </>
  );
}
