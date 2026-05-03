import imageImport from "@/assets/YOUR_IMAGE_HERE.png";
import { DevlogEntry } from "@/data/devlog";

export const templateDevlog: DevlogEntry = {
  id: "your-devlog-id",
  title: "Your Devlog Title",
  teaser: "A short 1-2 sentence preview of the devlog content",
  image: imageImport,
  date: "2025-05-03",
  content: `# Your Devlog Title

## Introduction Section

Write your introduction here. You can use markdown formatting.

### Subsection

Use code blocks for C# examples:

\`\`\`csharp
public class YourClass
{
    public void YourMethod()
    {
        // Your code here
    }
}
\`\`\`

## Another Section

Continue your article with more sections as needed.

### Key Points
- Point 1
- Point 2
- Point 3

Wrap up your devlog with your learnings and conclusions.
`,
};
