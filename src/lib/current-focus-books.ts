/**
 * Books highlighted in the Projects page Career section.
 * Add a matching raster under `src/assets/images/current-focus-books/{id}.jpg` (or .png)
 * to show an optimized cover; otherwise a typographic placeholder renders.
 *
 * `id` must match the image filename stem (e.g. `ai-engineering-book-cover.jpg`).
 */
export type CurrentFocusBook = {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly href: string;
};

export type CurrentFocusBookCard = CurrentFocusBook & {
  readonly cover: { readonly src: string; readonly width: number; readonly height: number } | null;
};

export const CURRENT_FOCUS_BOOKS: readonly CurrentFocusBook[] = [
  {
    id: "the-courage-to-be-disliked-book-cover",
    title: "The Courage To Be Disliked",
    author: "Ichiro Kishimi and Fumitake Koga",
    href: "https://www.amazon.com/Courage-Being-Disliked-Phenomenon-Freeing/dp/1501197274",
  },
  {
    id: "the-wisdom-of-insecurity-book-cover",
    title: "The Wisdom of Insecurity",
    author: "Alan Watts",
    href: "https://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307888300",
  },
  {
    id: "plato-five-dialogues-book-cover",
    title: "Five Dialogues",
    author: "Plato",
    href: "https://www.amazon.com/Five-Dialogues-Euthyphro-Apology-Hackett/dp/0872206335",
  },
];
