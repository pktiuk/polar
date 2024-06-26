import { PolarQueryClientProvider } from '@/app/providers'
import SubscriptionSuccess from '@/components/Subscriptions/SubscriptionSuccess'
import { UserContextProvider } from '@/providers/auth'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SubscriptionSuccess> = {
  title: 'Organisms/SubscriptionSucess',
  component: SubscriptionSuccess,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  render: (args) => {
    return (
      <UserContextProvider user={{}}>
        <PolarQueryClientProvider>
          <SubscriptionSuccess {...args} />
        </PolarQueryClientProvider>
      </UserContextProvider>
    )
  },
}

export default meta

type Story = StoryObj<typeof SubscriptionSuccess>

export const Default: Story = {
  args: {
    subscribeSession: {
      id: 'sub_1J5X2t2eZvKYlo2C2QqQ2Q2Q',
      organization_name: 'Polar',
      price: {
        id: '123',
        created_at: '2021-10-01T00:00:00Z',
        is_archived: false,
        price_amount: 500,
        price_currency: 'usd',
        recurring_interval: 'month',
      },
      subscription_tier: {
        id: 'sub_tier_1J5X2t2eZvKYlo2C2QqQ2Q2Q',
        name: 'Free',
        type: 'free',
        benefits: [
          {
            id: 'benefit_1J5X2t2eZvKYlo2C2QqQ2Q2Q',
            description: 'Supporter',
            deletable: true,
            selectable: true,
            created_at: '2021-10-08T11:17:14.000Z',
            type: 'custom',
            organization_id: '123',
          },
        ],
        prices: [
          {
            id: '123',
            created_at: '2021-10-01T00:00:00Z',
            is_archived: false,
            price_amount: 500,
            price_currency: 'usd',
            recurring_interval: 'month',
          },
        ],
        description: 'Free',
        created_at: '2021-10-08T11:17:14.000Z',
        is_archived: false,
        is_highlighted: false,
        organization_id: '123',
      },
    },
  },
}
