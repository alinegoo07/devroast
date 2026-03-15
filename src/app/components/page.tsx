import { BadgeDot, BadgeRoot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { ToggleDemo } from "@/components/ui/toggle-demo";

const buttonSizes = ["sm", "default", "lg", "xl"] as const;
const buttonVariantsList = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;

export default function ComponentsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">UI Components Demo</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="flex flex-wrap gap-4">
              {buttonVariantsList.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              {buttonSizes.map((size) => (
                <Button key={size} size={size}>
                  Size {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">
              Sizes with destructive variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {buttonSizes.map((size) => (
                <Button key={size} variant="destructive" size={size}>
                  Size {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Badge</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <BadgeRoot variant="critical">
                <BadgeDot variant="critical" />
                critical
              </BadgeRoot>
              <BadgeRoot variant="warning">
                <BadgeDot variant="warning" />
                warning
              </BadgeRoot>
              <BadgeRoot variant="good">
                <BadgeDot variant="good" />
                good
              </BadgeRoot>
              <BadgeRoot>default</BadgeRoot>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <BadgeRoot size="sm" variant="critical">
                <BadgeDot variant="critical" />
                critical
              </BadgeRoot>
              <BadgeRoot size="default" variant="critical">
                <BadgeDot variant="critical" />
                critical
              </BadgeRoot>
              <BadgeRoot size="lg" variant="critical">
                <BadgeDot variant="critical" />
                critical
              </BadgeRoot>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">ToggleSwitch</h2>

        <ToggleDemo />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">CodeBlock</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">With filename</h3>
            <CodeBlock
              code={`function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}`}
              language="javascript"
              filename="calculate.js"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Without filename</h3>
            <CodeBlock
              code={`const greet = (name) => {
  return \`Hello, \${name}!\`;
};`}
              language="javascript"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
