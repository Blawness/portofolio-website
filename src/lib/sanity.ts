import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you need real-time data
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types
export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  link?: string
  tags?: string[]
  featured?: boolean
  order?: number
  publishedAt: string
}

// Queries
export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc, publishedAt desc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      link,
      tags,
      featured,
      order,
      publishedAt
    }`
  )
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      link,
      tags,
      featured,
      order,
      publishedAt
    }`
  )
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      mainImage,
      link,
      tags,
      featured,
      order,
      publishedAt
    }`,
    { slug }
  )
}
