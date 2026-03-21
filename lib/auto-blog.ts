import Groq from "groq-sdk";
import { prisma } from "@/db/prisma";
import slugify from "slugify";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const TOPICS = [
  "How to activate Windows 11 Pro license key step by step",
  "Microsoft Office 2024 vs Office 2021 which should you buy",
  "How to transfer Windows license to a new PC",
  "Top 5 reasons to upgrade from Windows 10 to Windows 11",
  "How to install Microsoft Office on Mac",
  "BitLocker encryption guide for Windows 11 Pro users",
  "Microsoft Office Home vs Professional key differences",
  "How to fix Windows activation errors",
  "Best practices for digital software license security",
  "Windows 11 system requirements is your PC compatible",
  "How to get genuine Microsoft Office at the best price",
  "Windows 11 Pro features that boost productivity",
];

export async function runAutoBlog() {
  try {
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    console.log("Generating post for: " + topic);

    const admin = await prisma.user.findFirst({
      where: { role: "admin" },
    });

    if (!admin) {
      console.error("No admin user found");
      return { success: false, error: "No admin user found" };
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `Write a detailed SEO-optimized blog post about: "${topic}"

This blog is for Bigbl.com, an ecommerce store selling digital software licenses for Windows and Microsoft Office.

Return ONLY a valid JSON object with no extra text, no markdown, no backticks:
{
  "title": "SEO optimized title",
  "excerpt": "2 sentence description under 200 characters",
  "content": "Full HTML article using h2, p, ul, li tags. Minimum 600 words.",
  "readTime": 5,
  "categorySlug": "windows"
}

For categorySlug use only one of: windows, microsoft-office, how-to-guides, security, news`,
        },
      ],
    });

    const text = completion.choices[0].message.content ?? "";
    const cleaned = text.replace(/```json|```/g, "").trim();
    const generated = JSON.parse(cleaned);

    const category = await prisma.blogCategory.findUnique({
      where: { slug: generated.categorySlug },
    });

    if (!category) {
      console.error("Category not found: " + generated.categorySlug);
      return { success: false, error: "Category not found" };
    }

    const slug = slugify(generated.title, { lower: true, strict: true });
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    const finalSlug = existing ? slug + "-" + Date.now() : slug;

    const post = await prisma.blogPost.create({
      data: {
        title: generated.title,
        slug: finalSlug,
        excerpt: generated.excerpt,
        content: generated.content,
        published: true,
        featured: false,
        readTime: generated.readTime,
        authorId: admin.id,
        categoryId: category.id,
      },
    });

    console.log("Post created: " + post.title);
    return { success: true, post };
  } catch (err) {
    console.error("Auto blog error:", err);
    return { success: false, error: String(err) };
  }
}
