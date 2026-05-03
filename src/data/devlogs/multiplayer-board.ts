import boardImg from "@/assets/board.png";
import { DevlogEntry } from "@/data/devlog";

export const secondDevlog: DevlogEntry = {
  id: "building-multiplayer-board",
  title: "Building the Multiplayer Game Board",
  teaser: "How we designed and optimized the 3D game board for smooth networking and player interaction.",
  image: boardImg,
  date: "2025-04-15",
  content: `# Building the Multiplayer Game Board

## Design Goals

The board needed to:
- Support 4-6 players simultaneously
- Display game state clearly from any camera angle
- Handle smooth card animations and interactions
- Synchronize perfectly across all clients

## Technical Implementation

### Board Architecture

\`\`\`csharp
public class GameBoard : NetworkBehaviour
{
    private Dictionary<int, PlayerZone> playerZones;
    private CardDeck centerDeck;
    private GoldPile goldPile;

    [SerializeField] private float BoardWidth = 10f;
    [SerializeField] private float BoardHeight = 15f;

    public override void OnNetworkSpawn()
    {
        if (IsServer)
        {
            InitializeBoardState();
            SpawnCardDeck();
        }
    }

    public void PlayCard(Card card, int playerId)
    {
        PlayCardClientRpc(card.Id, playerId);
        UpdateBoardStateServerRpc(card.Id, playerId);
    }

    [Rpc(SendTo.Everyone)]
    private void PlayCardClientRpc(int cardId, int playerId)
    {
        Card card = cardDatabase.GetCard(cardId);
        PlayerZone zone = playerZones[playerId];
        zone.AddCard(card);
    }
}
\`\`\`

## Performance Optimizations

### Batch Networking Updates
Instead of sending each card placement individually, we batch updates every 100ms to reduce network traffic by 60%.

### Object Pooling
Cards are reused from a pool rather than instantiated/destroyed, reducing GC pressure significantly.

### LOD System
At distance, cards use lower resolution models and simplified physics. This keeps frame rates stable even with multiple players on different parts of the board.

## Lessons Learned

1. **UI must mirror game state** - Keep UI and game logic synchronized, not the other way around
2. **Animation costs add up** - 20 simultaneous card animations can tank performance; we implemented smart animation culling
3. **Network predictability matters** - Players expect instant visual feedback; we use client-side prediction with server validation

The final board implementation supports smooth 60fps gameplay with up to 6 players without stuttering.
`,
};
