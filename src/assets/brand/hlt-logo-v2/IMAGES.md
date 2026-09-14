# HLT page imagery — the swap list

**Built 14 September 2026 by the page seat (code-builder) during the six-page rebuild.**

**What this file is for.** Ian ruled on 14 September 2026 that "Imagery can be stock photos as the demo initial draft, we can quickly change these out after the event" (intent file `C:\Projects\IWT\02-builds\hlt-site-kit\intent\2026-09-14-hlt-site-kit.intent.md`, section 3.3). This file is the list that makes the swap a list rather than a hunt: one row per image, the exact URL the page carries, where it came from, and what its licence allows.

**Rules this build kept.** Nothing is downloaded into the repo, every image is hotlinked at its source, no image was paid for, and no image was generated. Each URL was fetched from this machine before it went on a page and returned `200 image/jpeg` (receipt below), and each one was looked at before it was chosen, so no page carries a picture nobody has seen.

**The licence.** All six are Unsplash. The Unsplash Licence (`https://unsplash.com/license`) grants free use, including commercial use, with no permission needed and no attribution required. That is the licence the pages rely on.

**THE ONE GAP, AND IT IS HONEST.** The photographer's name is **NOT ESTABLISHED** for any of these six. `unsplash.com` itself is behind an anti-bot wall from this session: both `https://unsplash.com/napi/search/photos?...` and `https://unsplash.com/s/photos/...` returned `401` with the body `<title>Making sure you're not a bot!</title>` when read on 14 September 2026. Only the image CDN (`images.unsplash.com`) answers, and it carries no photographer field. The Unsplash Licence does not require attribution, so no page is in breach, but if Ian wants the credits the name is one click away on each photo's own page in a browser. Never write a name into this table that nobody has read.

---

## The images, one row per page

| Route | Image URL (exactly as the page carries it) | Photographer | Source and licence | Alt text on the page |
|---|---|---|---|---|
| `/aios-audit` (alias `/ai-opportunity-audit`) | `https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1600&q=70` | NOT ESTABLISHED (see the gap note above) | Unsplash, photo id `1590402494587-44b71d7772f6`. Unsplash Licence: free for commercial use, no attribution required (`https://unsplash.com/license`) | Two people mapping out a week of work on a glass wall covered in sticky notes. |
| `/brand-os` | `https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=70` | NOT ESTABLISHED (see the gap note above) | Unsplash, photo id `1561070791-2526d30994b5`. Unsplash Licence: free for commercial use, no attribution required (`https://unsplash.com/license`) | A designer's desk with printed colour swatches and brand sketches on a tablet. |
| `/executive-assistant` | `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=70` | NOT ESTABLISHED (see the gap note above) | Unsplash, photo id `1486312338219-ce68d2c6f44d`. Unsplash Licence: free for commercial use, no attribution required (`https://unsplash.com/license`) | Someone typing at a laptop with a second screen open behind it. |
| `/ops-cockpit` | `https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=70` | NOT ESTABLISHED (see the gap note above) | Unsplash, photo id `1556155092-490a1ba16284`. Unsplash Licence: free for commercial use, no attribution required (`https://unsplash.com/license`) | A laptop on a wooden table showing a clean dashboard of figures. |
| `/openbrain` | `https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=70` | NOT ESTABLISHED (see the gap note above) | Unsplash, photo id `1524995997946-a1c2e315a42f`. Unsplash Licence: free for commercial use, no attribution required (`https://unsplash.com/license`) | A long curved library shelf, filled and indexed. |
| `/` (home) | `https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=70` | NOT ESTABLISHED (see the gap note above) | Unsplash, photo id `1563492065599-3520f775eeed`. Unsplash Licence: free for commercial use, no attribution required (`https://unsplash.com/license`) | Thai temple rooftops under a wide open sky. |

---

## Receipts

**Every URL fetched from this machine, 14 September 2026**, at the exact query string the page carries:

```
200 image/jpeg 153KB  /ai-opportunity-audit  https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1600&q=70
200 image/jpeg 388KB  /brand-os  https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=70
200 image/jpeg 132KB  /custom-ai-assistant  https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=70
200 image/jpeg 241KB  /ops-cockpit  https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=70
200 image/jpeg 268KB  /openbrain  https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=70
200 image/jpeg 365KB  / (home)  https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=70
```

The receipt above was taken for all six in one run, before the first page was built, and the table above now carries every one of them. The `/custom-ai-assistant` line in the receipt is the pre-rename path of `/executive-assistant`, which is the same page and the same image; the old path stays live as an alias.

**How each image was chosen.** Forty-five candidates were pulled at thumbnail size into a scratchpad outside the repo and looked at one by one; six were picked for what they actually show, not for what an id was assumed to show. The rejected ones included the obvious stock clichés (a high-five over a laptop, a robot on a bench) and anything too busy to carry a headline over it.

**When the real photographs arrive** (after Connecting Hua Hin, 18 September 2026), swap the URL in the page's copy module under `src\copy\`, change the alt text in the same place, update the row here, and re-run the page's copy fixture, which fails if a page carries an image this file doesn't list.
