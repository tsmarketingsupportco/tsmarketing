<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Text Contrast & Color Rules
Always follow strict contrast invariants across all components, templates, and styles:

1. **Black / Dark Background $\rightarrow$ White Text**
   - Any container or element with a black or dark background (`bg-black`, `bg-background`, `bg-surface`, `bg-[#001B70]`, dark cards, modal overlays, dark buttons) MUST use white text:
     - Primary text: `text-white` (`#FFFFFF`) or high-luminance `--foreground`.
     - Secondary/body text: `text-white/85` or `text-zinc-200`.
     - Muted text: `text-white/65` to `text-white/70`. Never use low-contrast dark or grey text on dark backgrounds.
     - Accent badges/pills on dark: Ensure text is crisp white or a high-luminance contrast color ($\ge 4.5:1$ WCAG AA).

2. **White / Light Background $\rightarrow$ Black Text**
   - Any container or element with a white or light background (`bg-white`, light cards, popovers, light badges, light buttons) MUST use black text:
     - Primary text: `text-black` (`#000000`).
     - Secondary/body text: `text-black/85` or `text-zinc-800`.
     - Muted text: `text-black/65` to `text-black/70`. Never use white or light grey text on light backgrounds.

