import { getServerSideAPI } from '@/utils/api'
import {
  Article,
  Platforms,
  ResponseError,
  SubscriptionSummary,
} from '@polar-sh/sdk'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import ClientPage from './ClientPage'

const cacheConfig = {
  next: {
    revalidate: 30, // 30 seconds
  },
}

export async function generateMetadata(
  {
    params,
  }: {
    params: { organization: string; postSlug: string }
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const api = getServerSideAPI()

  let post: Article | undefined

  try {
    post = await api.articles.lookup({
      platform: Platforms.GITHUB,
      organizationName: params.organization,
      slug: params.postSlug,
    })
  } catch (e) {
    if (e instanceof ResponseError && e.response.status === 404) {
      notFound()
    }
  }

  if (!post) {
    notFound()
  }

  return {
    title: {
      absolute: `${post.title} by ${post.byline.name}`,
    },

    openGraph: {
      title: `${post.title}`,
      description: `${post.title} by ${post.byline.name}`,
      siteName: 'Polar',

      images: [
        {
          url: `https://polar.sh/og?org=${post.organization.name}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `https://polar.sh/og?org=${post.organization.name}`,
          width: 1200,
          height: 630,
          alt: `${post.title}`,
        },
      ],
      card: 'summary_large_image',
      title: `${post.title}`,
      description: `${post.title} by ${post.byline.name}`,
    },
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { organization: string; postSlug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const api = getServerSideAPI()

  const [post, organization] = await Promise.all([
    api.articles.lookup({
      platform: Platforms.GITHUB,
      organizationName: params.organization,
      slug: params.postSlug,
    }),
    api.organizations.lookup(
      {
        platform: Platforms.GITHUB,
        organizationName: params.organization,
      },
      cacheConfig,
    ),
  ])

  let subscriptionsSummary: SubscriptionSummary[] = []
  let subscribersCount = 0
  try {
    const subscriptionSummaryResponse =
      await api.subscriptions.searchSubscriptionsSummary(
        {
          platform: Platforms.GITHUB,
          organizationName: params.organization,
          limit: 20,
        },
        cacheConfig,
      )

    subscriptionsSummary = subscriptionSummaryResponse.items ?? []
    subscribersCount = subscriptionSummaryResponse.pagination.total_count
  } catch (err) {}

  return (
    <>
      {post && (
        <ClientPage
          post={post}
          organization={organization}
          subscribersCount={subscribersCount}
          subscriptionSummary={subscriptionsSummary}
        />
      )}
    </>
  )
}