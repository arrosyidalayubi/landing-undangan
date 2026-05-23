import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  contentHtml?: string;
}

// 1. Mengambil semua artikel dan diurutkan berdasarkan tanggal terbaru
export function getAllPosts(): BlogPost[] {
  // Jika folder posts belum ada, kembalikan array kosong
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as { title: string; description: string; date: string; thumbnail: string }),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 2. Mengambil detail isi satu artikel berdasarkan slug
export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents);

  // Proses markdown menjadi string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; description: string; date: string; thumbnail: string }),
  };
}