export const recommendedToolLinks = {
  aicado: "https://www.aicado.ai/",
  arcads: "https://www.arcads.ai/",
  blaze: "https://www.blaze.ai/",
  braveBrowser: "https://brave.com/",
  canvaCreativeOs: "https://www.canva.com/newsroom/news/creative-operating-system/",
  canvasInGemini: "https://blog.google/products/gemini/gemini-collaboration-features/",
  chatgpt: "https://chatgpt.com/",
  claude: "https://claude.ai/referral/FVwnTFNZTw",
  descript: "https://descript.cello.so/pDLZWtym204",
  elevenLabs: "https://elevenlabs.io/",
  fishAudio: "https://fish.audio/",
  gemini: "https://gemini.google.com/",
  hailuo: "https://hailuoai.video/",
  heygen: "https://www.heygen.com/",
  heyreach: "https://heyreach.io/?via=andra",
  lindy: "https://www.lindy.ai/",
  midjourney: "https://www.midjourney.com/",
  magicAnimator: "https://magicanimator.com/",
  notion: "https://www.notion.so/",
  perplexity: "https://www.perplexity.ai/",
  pomelli: "https://www.pomelli.run/",
  promptsignal: "https://www.promptsignal.ai/",
  reachy: "https://www.reachy.ai/",
  sixtySecSite: "https://60sec.site/",
  synthesia: "https://www.synthesia.io/",
  tenxlaunch: "https://tenxlaunch.framer.ai/",
  typefully: "https://typefully.com/",
  visualStudioCode: "https://code.visualstudio.com/",
  wisprFlow: "https://wisprflow.ai/r?ANDRA16",
  zapierAi: "https://zapier.com/ai"
} as const;

export type RecommendedToolLinkKey = keyof typeof recommendedToolLinks;

export const recommendedToolMentionLinks: Array<{
  label: string;
  href: (typeof recommendedToolLinks)[RecommendedToolLinkKey];
}> = [
  { label: "Wispr Flow", href: recommendedToolLinks.wisprFlow },
  { label: "Claude", href: recommendedToolLinks.claude },
  { label: "ChatGPT", href: recommendedToolLinks.chatgpt },
  { label: "Perplexity", href: recommendedToolLinks.perplexity },
  { label: "PromptSignal", href: recommendedToolLinks.promptsignal },
  { label: "Zapier AI", href: recommendedToolLinks.zapierAi },
  { label: "Midjourney", href: recommendedToolLinks.midjourney },
  { label: "ElevenLabs", href: recommendedToolLinks.elevenLabs },
  { label: "Synthesia", href: recommendedToolLinks.synthesia },
  { label: "Typefully", href: recommendedToolLinks.typefully },
  { label: "HeyReach", href: recommendedToolLinks.heyreach },
  { label: "Descript", href: recommendedToolLinks.descript },
  { label: "HeyGen", href: recommendedToolLinks.heygen },
  { label: "Arcads", href: recommendedToolLinks.arcads },
  { label: "Reachy.ai", href: recommendedToolLinks.reachy },
  { label: "Aicado", href: recommendedToolLinks.aicado },
  { label: "Notion", href: recommendedToolLinks.notion },
  { label: "Lindy", href: recommendedToolLinks.lindy },
  { label: "Blaze", href: recommendedToolLinks.blaze },
  { label: "Gemini", href: recommendedToolLinks.gemini },
  { label: "Hailuo", href: recommendedToolLinks.hailuo },
  { label: "Canva", href: recommendedToolLinks.canvaCreativeOs }
];
