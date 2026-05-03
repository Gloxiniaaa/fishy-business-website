import binocularImg from "@/assets/Binocular.png";
import { DevlogEntry } from "@/data/devlog";

export const firstDevlog: DevlogEntry = {
  id: "understanding-saboteur-mechanics",
  title: "Understanding Saboteur Mechanics",
  teaser: "Deep dive into how we designed the core saboteur gameplay loop and the challenges we faced.",
  image: binocularImg,
  date: "2025-05-01",
  content: `# Understanding Saboteur Mechanics

## The Challenge

Translating a turn-based card game into a real-time 3D environment required rethinking how information is hidden and revealed. In physical Saboteur, secrecy relies on physical cards and player discretion. In our digital version, we needed to prevent players from accidentally revealing roles through their actions or UI states.

## Our Solution

We implemented a role-visibility system that:
- Hides role information until the reveal phase
- Separates player state from client-side rendering
- Uses network synchronization to prevent desyncs

### Role System Architecture

\`\`\`csharp
public class GameRole
{
    public RoleType type { get; private set; }
    public bool isRevealed { get; private set; }

    public void RevealRole()
    {
        isRevealed = true;
        OnRoleRevealed?.Invoke(this);
    }

    public RoleAction GetAvailableActions()
    {
        if (!isRevealed) return RoleAction.None;
        return type switch
        {
            RoleType.Saboteur => RoleAction.Sabotage,
            RoleType.Miner => RoleAction.Support,
            _ => RoleAction.None
        };
    }
}
\`\`\`

## Key Learnings

1. **State Management is Critical** - Separating what players know from what the server knows prevents information leaks
2. **Network Authority Matters** - Always validate role actions on the server, never trust client predictions
3. **Playtesting Reveals Everything** - We found edge cases where clever players could infer roles through network timing

The final implementation passes all our security tests and maintains fairness across all game modes.
`,
};
