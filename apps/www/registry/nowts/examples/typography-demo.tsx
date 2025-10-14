import { Card } from "@/components/ui/card"
import { Typography } from "@/registry/nowts/ui/typography"

export default function TypographyDemo() {
  return (
    <Card className="space-y-6 p-6">
      <div className="space-y-2">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="muted">Large page heading</Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="muted">Section heading</Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="muted">Subsection heading</Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="p">
          This is a paragraph of text using the Typography component. It
          provides consistent styling across your application.
        </Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="lead">
          This is lead text - slightly larger and more prominent than regular
          paragraphs.
        </Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="large">Large text for emphasis</Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="small">Small text for fine print</Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="muted">
          Muted text for secondary information
        </Typography>
      </div>

      <div className="space-y-2">
        <Typography variant="code">const code = "inline code block"</Typography>
      </div>
    </Card>
  )
}
